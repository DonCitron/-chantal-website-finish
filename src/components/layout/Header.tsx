import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import the social icons from LandingPage
const SpotifyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" fill="#1DB954" />
    <path d="M8 15c2.5-1 5.5-1 8 0" stroke="#fff" strokeWidth="1.5" />
    <path d="M9 12c2-0.7 4-0.7 6 0" stroke="#fff" strokeWidth="1.5" />
    <path d="M10 9.5c1.3-0.3 2.7-0.3 4 0" stroke="#fff" strokeWidth="1.2" />
  </svg>
);

const LinktreeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2v20" />
    <path d="M17 7l-5 5-5-5" />
    <path d="M17 17l-5-5-5 5" />
  </svg>
);

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLDivElement>(null);
  
  const location = useLocation();
  const navigate = useNavigate();
  
  const sectionIds = ['home', 'ueber-mich', 'mentoring', 'course', 'kontakt'];
  const [activeSection, setActiveSection] = useState('home');
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Listen for resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  useEffect(() => {
    const handleScrollSpy = () => {
      let found = false;
      const headerHeight = headerRef.current?.offsetHeight || 100;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= headerHeight + 4) {
            setActiveSection(sectionIds[i]);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveSection('home');
    };
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);
  
  useEffect(() => {
    const handleScrollHide = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 80) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true); // scrolling up
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScrollHide, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollHide);
  }, []);
  
  // Helper for smooth scroll or navigation
  const handleNavClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(() => setMobileMenuOpen(false), 200);
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
        setTimeout(() => setMobileMenuOpen(false), 200);
      }, 100);
    }
  };
  
  const isDesktop = windowWidth >= 1024;
  
  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cream-50/95 dark:bg-charcoal-900/95 backdrop-blur-sm py-2 shadow-md' 
          : 'bg-transparent py-3'
      } ${showHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} transition-transform transition-opacity duration-300`}
    >
      <div className="w-full flex flex-col items-center bg-cream-50/95 dark:bg-charcoal-900/95 backdrop-blur-sm">
        {/* Logo / Brand centered in top bar */}
        <div className="flex items-center justify-center w-full px-4 py-3">
          <a href="/" className="text-3xl font-bold text-center">
            Open <span style={{ color: '#D17C6B' }}>Mind</span> <span style={{ color: '#3B3737' }} className="dark:text-white">Circle</span>
          </a>
          
          {/* Dark Mode Toggle positioned absolute right */}
          <div className="absolute right-4">
            <button
              onClick={() => {
                toggleDarkMode();
                localStorage.setItem('colorMode', document.documentElement.classList.contains('dark') ? 'light' : 'dark');
              }}
              className="flex items-center p-2 rounded-full hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
        
        {/* Navigation Bar below logo */}
        <div className="w-full border-t border-gray-200 dark:border-gray-800">
          {isDesktop ? (
            <nav className="flex items-center justify-center space-x-12 py-4 px-4">
              <a 
                href="#home" 
                onClick={handleNavClick('home')} 
                className={`nav-link${activeSection === 'home' ? ' active' : ''}`}
              >
                Start
              </a>
              <a 
                href="#ueber-mich" 
                onClick={handleNavClick('ueber-mich')} 
                className={`nav-link${activeSection === 'ueber-mich' ? ' active' : ''}`}
              >
                Über mich
              </a>
              <a 
                href="#mentoring" 
                onClick={handleNavClick('mentoring')} 
                className={`nav-link${activeSection === 'mentoring' ? ' active' : ''}`}
              >
                Mentoring
              </a>
              <a 
                href="#testimonials" 
                onClick={handleNavClick('testimonials')} 
                className={`nav-link${activeSection === 'testimonials' ? ' active' : ''}`}
              >
                Kundenfeedback
              </a>
              <a 
                href="#course" 
                onClick={handleNavClick('course')} 
                className={`nav-link${activeSection === 'course' ? ' active' : ''}`}
              >
                Produkte
              </a>
              <a 
                href="#kontakt" 
                onClick={handleNavClick('kontakt')} 
                className={`nav-link${activeSection === 'kontakt' ? ' active' : ''}`}
              >
                Kontakt
              </a>
            </nav>
          ) : (
            <div className="flex items-center justify-end py-2 px-4">
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#3B3737] dark:text-white"
                aria-label="Open mobile menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          )}
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="w-full bg-cream-50/95 dark:bg-charcoal-900/95 overflow-hidden"
            >
              <nav className="flex flex-col p-4 space-y-4">
                <a 
                  href="#home" 
                  onClick={handleNavClick('home')} 
                  className={`nav-link${activeSection === 'home' ? ' active' : ''}`}
                >
                  Start
                </a>
                <a 
                  href="#ueber-mich" 
                  onClick={handleNavClick('ueber-mich')} 
                  className={`nav-link${activeSection === 'ueber-mich' ? ' active' : ''}`}
                >
                  Über mich
                </a>
                <a 
                  href="#mentoring" 
                  onClick={handleNavClick('mentoring')} 
                  className={`nav-link${activeSection === 'mentoring' ? ' active' : ''}`}
                >
                  Mentoring
                </a>
                <a 
                  href="#testimonials" 
                  onClick={handleNavClick('testimonials')} 
                  className={`nav-link${activeSection === 'testimonials' ? ' active' : ''}`}
                >
                  Kundenfeedback
                </a>
                <a 
                  href="#course" 
                  onClick={handleNavClick('course')} 
                  className={`nav-link${activeSection === 'course' ? ' active' : ''}`}
                >
                  Produkte
                </a>
                <a 
                  href="#kontakt" 
                  onClick={handleNavClick('kontakt')} 
                  className={`nav-link${activeSection === 'kontakt' ? ' active' : ''}`}
                >
                  Kontakt
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;