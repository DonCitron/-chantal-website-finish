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
  
  const sectionIds = ['home', 'ueber-mich', 'mentoring', 'course', 'contact'];
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
      const headerHeight = headerRef.current?.offsetHeight || 80;
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
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto px-4 py-2">
          <div className="flex-1 md:flex-none">
            {/* Logo / Brand */}
            <a href="/" className="text-xl font-medium text-[#3B3737] dark:text-white">
              Open<span style={{ color: '#D17C6B' }}>Mind</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          {isDesktop && (
            <nav className="hidden md:flex items-center space-x-8">
              <a 
                href="#home" 
                onClick={handleNavClick('home')} 
                className={`whitespace-nowrap text-[#3B3737] dark:text-white hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-300 ${activeSection === 'home' ? 'text-accent-600 dark:text-accent-400 font-semibold' : ''}`}
              >
                Start
              </a>
              <a 
                href="#ueber-mich" 
                onClick={handleNavClick('ueber-mich')} 
                className={`whitespace-nowrap text-[#3B3737] dark:text-white hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-300 ${activeSection === 'ueber-mich' ? 'text-accent-600 dark:text-accent-400 font-semibold' : ''}`}
              >
                Über mich
              </a>
              <a 
                href="#mentoring" 
                onClick={handleNavClick('mentoring')} 
                className={`whitespace-nowrap text-[#3B3737] dark:text-white hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-300 ${activeSection === 'mentoring' ? 'text-accent-600 dark:text-accent-400 font-semibold' : ''}`}
              >
                Mentoring
              </a>
              <a 
                href="#course" 
                onClick={handleNavClick('course')} 
                className={`whitespace-nowrap text-[#3B3737] dark:text-white hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-300 ${activeSection === 'course' ? 'text-accent-600 dark:text-accent-400 font-semibold' : ''}`}
              >
                Produkte
              </a>
              <a 
                href="#contact" 
                onClick={handleNavClick('contact')} 
                className={`whitespace-nowrap text-[#3B3737] dark:text-white hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-300 ${activeSection === 'contact' ? 'text-accent-600 dark:text-accent-400 font-semibold' : ''}`}
              >
                Kontakt
              </a>
            </nav>
          )}
          
          <div className="flex items-center gap-3 flex-1 md:flex-none justify-end">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="flex items-center p-2 rounded-full hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              style={{ fontSize: 20 }}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center p-2 ml-1 rounded-full bg-charcoal-100 dark:bg-charcoal-800 transition-colors md:hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            
            {/* Call to Action Button (Desktop) */}
            {isDesktop && (
              <a
                href="https://tally.so/r/m65xDk"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-4 py-2 bg-[#D17C6B] text-white rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1"
              >
                Kostenlos Kennenlernen
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden fixed top-[60px] left-0 right-0 bg-cream-50/98 dark:bg-charcoal-900/98 shadow-md z-30 backdrop-blur-sm"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container mx-auto py-6 px-6">
              <ul className="flex flex-col space-y-4 text-lg">
                <li>
                  <a href="#home" onClick={handleNavClick('home')} className={`block py-2 text-[#3B3737] dark:text-white ${activeSection === 'home' ? 'text-accent-600 dark:text-accent-400 font-semibold' : ''}`}>
                    Start
                  </a>
                </li>
                <li>
                  <a href="#ueber-mich" onClick={handleNavClick('ueber-mich')} className={`block py-2 text-[#3B3737] dark:text-white ${activeSection === 'ueber-mich' ? 'text-accent-600 dark:text-accent-400 font-semibold' : ''}`}>
                    Über mich
                  </a>
                </li>
                <li>
                  <a href="#mentoring" onClick={handleNavClick('mentoring')} className={`block py-2 text-[#3B3737] dark:text-white ${activeSection === 'mentoring' ? 'text-accent-600 dark:text-accent-400 font-semibold' : ''}`}>
                    Mentoring
                  </a>
                </li>
                <li>
                  <a href="#course" onClick={handleNavClick('course')} className={`block py-2 text-[#3B3737] dark:text-white ${activeSection === 'course' ? 'text-accent-600 dark:text-accent-400 font-semibold' : ''}`}>
                    Produkte
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={handleNavClick('contact')} className={`block py-2 text-[#3B3737] dark:text-white ${activeSection === 'contact' ? 'text-accent-600 dark:text-accent-400 font-semibold' : ''}`}>
                    Kontakt
                  </a>
                </li>
                
                {/* Mobile CTA */}
                <li className="pt-4 border-t border-charcoal-200 dark:border-charcoal-700 mt-2">
                  <a
                    href="https://tally.so/r/m65xDk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 px-4 bg-[#D17C6B] text-white rounded-lg font-semibold"
                  >
                    Kostenlos Kennenlernen
                  </a>
                </li>
                
                {/* Mobile Social Links */}
                <li className="pt-4 mt-2">
                  <div className="flex items-center space-x-5 py-2 justify-center">
                    <a 
                      href="http://open.spotify.com/show/5aXhid2UTtgioftEV7ESPa" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Spotify" 
                      className="text-[#3B3737] dark:text-white p-2 hover:scale-110 transition-transform"
                    >
                      <SpotifyIcon style={{ width: 28, height: 28 }} />
                    </a>
                    <a 
                      href="https://www.instagram.com/chantiheulleise/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Instagram" 
                      className="text-[#3B3737] dark:text-white p-2 hover:scale-110 transition-transform"
                    >
                      <Instagram size={28} />
                    </a>
                    <a 
                      href="https://linktr.ee/chantiheulleise" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Linktree" 
                      className="text-[#3B3737] dark:text-white p-2 hover:scale-110 transition-transform"
                    >
                      <LinktreeIcon style={{ width: 28, height: 28 }} />
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;