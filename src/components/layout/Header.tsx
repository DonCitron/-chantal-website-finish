import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  
  // Fix the section IDs to match what's actually on the page
  const sectionIds = ['home', 'ueber-mich', 'mentoring', 'testimonials', 'course', 'kontakt'];
  const [activeSection, setActiveSection] = useState('home');
  
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
  
  // Improved scroll spy logic
  useEffect(() => {
    const handleScrollSpy = () => {
      const headerHeight = headerRef.current?.offsetHeight || 120;
      const scrollPosition = window.scrollY + headerHeight + 50; // Add offset for better detection
      
      let currentSection = 'home';
      
      // Check each section
      sectionIds.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          const elementBottom = elementTop + element.offsetHeight;
          
          // If we're within this section
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = sectionId;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    // Run initially
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
          ? 'backdrop-blur-md py-2 shadow-md' 
          : 'backdrop-blur-sm py-3'
      } ${showHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} transition-transform transition-opacity duration-300`}
      style={{
        background: isDarkMode 
          ? 'rgba(35, 35, 38, 0.95)' 
          : 'rgba(248, 245, 240, 0.95)' // Zurück zum hellen Hintergrund
      }}
    >
      <div className="w-full flex flex-col items-center bg-cream-50/98 dark:bg-charcoal-900/98 backdrop-blur-md shadow-sm"
      style={{
        background: isDarkMode 
          ? 'rgba(35, 35, 38, 0.98)' 
          : 'rgba(248, 245, 240, 0.98)', // Zurück zum hellen Hintergrund
        borderBottom: '1px solid rgba(209, 124, 107, 0.2)'
      }}>
        {/* Logo / Brand centered in top bar */}
        <div className="flex items-center justify-center w-full px-4 py-3 relative">
          <a href="/" className="text-center" style={{ 
            fontSize: isDesktop ? '72px' : '48px',
            fontWeight: 700, 
            letterSpacing: '-1px', 
            color: isDarkMode ? 'rgb(255, 255, 255)' : '#D17C6B',
            textShadow: isDarkMode 
              ? 'rgba(0, 0, 0, 0.3) 0px 2px 8px' 
              : 'rgba(0, 0, 0, 0.1) 0px 1px 3px, rgba(255, 255, 255, 0.8) 0px 0px 8px',
            maxWidth: isDesktop ? 'none' : 'calc(100% - 140px)',
            lineHeight: isDesktop ? 'normal' : '1.1'
          }}>
            Open Mind Circle
          </a>
          
          {/* Dark Mode Toggle UND Mobile Menu Button positioned absolute right */}
          <div className="absolute right-4 flex items-center gap-2" style={{
            transform: isDesktop ? 'none' : 'scale(0.9)'
          }}>
            {/* Mobile Menu Button - nur auf Mobile sichtbar */}
            {!isDesktop && (
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg transition-colors"
                style={{
                  color: isDarkMode ? '#ffffff' : '#D17C6B',
                  backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(209, 124, 107, 0.1)',
                  border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(209, 124, 107, 0.2)'}`
                }}
                aria-label="Open mobile menu"
              >
                {mobileMenuOpen ? 
                  <X size={20} color={isDarkMode ? '#ffffff' : '#D17C6B'} /> : 
                  <Menu size={20} color={isDarkMode ? '#ffffff' : '#D17C6B'} />
                }
              </button>
            )}
            
            {/* Mode indicator - nur auf Desktop sichtbar */}
            {isDesktop && (
              <span style={{ 
                fontSize: '12px',
                color: isDarkMode ? '#ffffff' : '#D17C6B',
                fontWeight: 'bold',
                padding: '4px 8px',
                backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(209, 124, 107, 0.15)',
                borderRadius: '4px'
              }}>
                {isDarkMode ? 'DARK' : 'LIGHT'}
              </span>
            )}
            
            {/* Dark Mode Toggle Button */}
            <button
              onClick={() => {
                console.log('Dark mode toggle clicked! Current mode:', isDarkMode);
                toggleDarkMode();
                localStorage.setItem('colorMode', document.documentElement.classList.contains('dark') ? 'light' : 'dark');
              }}
              className="flex items-center rounded-full transition-colors"
              style={{
                padding: isDesktop ? '12px' : '8px',
                backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(209, 124, 107, 0.15)',
                color: isDarkMode ? '#ffffff' : '#D17C6B',
                border: `2px solid ${isDarkMode ? '#ffffff' : '#D17C6B'}`,
                cursor: 'pointer'
              }}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? 
                <Sun size={isDesktop ? 24 : 20} color="#ffffff" /> : 
                <Moon size={isDesktop ? 24 : 20} color="#D17C6B" />
              }
            </button>
          </div>
        </div>
        
        {/* Navigation Bar below logo - NUR für Desktop */}
        {isDesktop && (
          <div className="w-full border-t border-gray-200 dark:border-gray-800">
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
          </div>
        )}
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="w-full overflow-hidden"
              style={{
                background: isDarkMode 
                  ? 'rgba(35, 35, 38, 0.98)' 
                  : 'linear-gradient(135deg, #D17C6B 0%, #E8A498 100%)'
              }}
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

      {/* Add CSS styles for nav-link */}
      <style>{`
        .nav-link {
          color: ${isDarkMode ? '#e5e7eb' : '#2D2A2A'};
          text-decoration: none;
          padding: ${isDesktop ? '8px 16px' : '12px 16px'};
          border-radius: 8px;
          transition: all 0.3s ease;
          font-weight: 600;
          position: relative;
          display: block;
          text-align: ${isDesktop ? 'center' : 'left'};
        }
        
        .nav-link:hover {
          color: ${isDarkMode ? '#ffffff' : '#D17C6B'};
          background-color: ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(209, 124, 107, 0.15)'};
          transform: translateY(-1px);
        }
        
        .nav-link.active {
          color: ${isDarkMode ? '#ffffff' : '#ffffff'};
          background: ${isDarkMode 
            ? 'rgba(255, 255, 255, 0.25)' 
            : 'linear-gradient(135deg, #D17C6B 0%, #E8A498 100%)'};
          font-weight: 700;
          box-shadow: ${isDarkMode 
            ? '0 4px 12px rgba(255, 255, 255, 0.2)' 
            : '0 4px 12px rgba(209, 124, 107, 0.4)'};
          transform: ${isDesktop ? 'translateY(-1px)' : 'translateX(4px)'};
        }
        
        .nav-link.active::after {
          content: '';
          position: absolute;
          ${isDesktop ? `
            bottom: -3px;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            height: 3px;
          ` : `
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 4px;
            height: 60%;
          `}
          background: ${isDarkMode 
            ? '#ffffff' 
            : '#ffffff'};
          border-radius: 2px;
          box-shadow: ${isDarkMode 
            ? '0 2px 8px rgba(255, 255, 255, 0.4)' 
            : '0 2px 8px rgba(255, 255, 255, 0.6)'};
        }

        @media (max-width: 1023px) {
          .nav-link.active::after {
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 4px;
            height: 60%;
            background: #ffffff;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;