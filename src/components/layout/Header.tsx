import React, { useState, useEffect, useRef, FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Section IDs for navigation - must match the IDs in LandingPage
  const sectionIds = ['home', 'ueber-mich', 'mentoring', 'testimonials', 'course', 'kontakt'];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  
  // Scroll spy effect
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 120; // Add offset for header
      
      // Special case for home section (top of page)
      if (scrollPosition < 200) {
        setActiveSection('home');
        return;
      }
      
      // Find the section in view (check from bottom to top)
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition + 100 >= offsetTop) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy(); // Run initially
    
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [sectionIds]);
  
  // Auto-hide header on scroll
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
    
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
    
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`, { replace: true });
      // Add a small delay to ensure the page has loaded
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
      return;
    }
    
    scrollToSection(sectionId);
  };
  
  const scrollToSection = (sectionId: string) => {
    // Special case for home (scroll to top)
    if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', '#');
      return;
    }
    
    // Find the target element
    const targetElement = document.getElementById(sectionId);
    if (!targetElement) {
      console.warn(`Element with id '${sectionId}' not found`);
      return;
    }
    
    // Calculate the header offset (height of header + some padding)
    const headerOffset = 120;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    // Scroll to the section with smooth behavior
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    // Update URL hash without scrolling
    window.history.pushState(null, '', `#${sectionId}`);
  };

  // NavLink component
  const NavLink: FC<{
    sectionId: string;
    text: string;
    activeSection: string;
    onClick: (sectionId: string) => (e: React.MouseEvent) => void;
  }> = ({ sectionId, text, activeSection, onClick }) => (
    <a
      href={`#${sectionId}`}
      onClick={onClick(sectionId)}
      className={`text-sm font-medium transition-colors ${
        activeSection === sectionId
          ? 'text-charcoal-900 border-b-2 border-terracotta-500 pb-1'
          : 'text-charcoal-600 hover:text-charcoal-900'
      }`}
    >
      {text}
    </a>
  );

  return (
    <>
      <header 
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 backdrop-blur-sm ${
          showHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } ${isDarkMode ? 'bg-black' : 'bg-white'}`}
        style={{
          borderBottom: '1px solid rgba(209, 124, 107, 0.3)',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          {/* Top row with centered title and action buttons */}
          <div className="flex justify-between items-center mb-2">
            <div className="flex-1"></div> {/* Spacer for flex alignment */}
            
            {/* Centered title */}
            <div className="text-center">
              <h1 className={`text-2xl font-serif font-bold ${isDarkMode ? 'text-white' : 'text-charcoal-900'}`}>
                Open Mind Circle
              </h1>
            </div>
            
            {/* Action buttons */}
            <div className="flex items-center space-x-2 flex-1 justify-end">
              {/* Dark mode toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-charcoal-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-charcoal-500 flex items-center justify-center"
                style={{
                  border: '2px solid #D17C6B',
                  backgroundColor: 'rgba(209, 124, 107, 0.15)',
                  borderRadius: '9999px',
                  width: '36px',
                  height: '36px'
                }}
                aria-label={isDarkMode ? 'Zum Hellmodus wechseln' : 'Zum Dunkelmodus wechseln'}
              >
                {isDarkMode ? (
                  <Sun size={16} className="text-white" />
                ) : (
                  <Moon size={16} className="text-white" />
                )}
              </button>
              
              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center ${
                  isDarkMode 
                    ? 'text-white hover:bg-gray-800 focus:ring-gray-500' 
                    : 'text-charcoal-900 hover:bg-charcoal-50 focus:ring-charcoal-500'
                }`}
                style={{
                  border: '2px solid #D17C6B',
                  backgroundColor: 'rgba(209, 124, 107, 0.15)',
                  borderRadius: '9999px',
                  width: '36px',
                  height: '36px'
                }}
                aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X size={16} className="text-charcoal-900" />
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Desktop navigation - centered below title */}
          <div className="hidden lg:flex justify-center mb-2">
            <nav className="flex items-center space-x-8">
              <NavLink sectionId="home" text="Start" activeSection={activeSection} onClick={handleNavClick} />
              <NavLink sectionId="ueber-mich" text="Über mich" activeSection={activeSection} onClick={handleNavClick} />
              <NavLink sectionId="mentoring" text="Mentoring" activeSection={activeSection} onClick={handleNavClick} />
              <NavLink sectionId="testimonials" text="Kundenfeedback" activeSection={activeSection} onClick={handleNavClick} />
              <NavLink sectionId="course" text="Produkte" activeSection={activeSection} onClick={handleNavClick} />
              <NavLink sectionId="kontakt" text="Kontakt" activeSection={activeSection} onClick={handleNavClick} />
            </nav>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden w-full overflow-hidden bg-white shadow-lg rounded-b-lg"
              >
                <nav className="px-4 py-3 space-y-1">
                  <MobileNavLink sectionId="home" text="Start" activeSection={activeSection} onClick={handleNavClick} />
                  <MobileNavLink sectionId="ueber-mich" text="Über mich" activeSection={activeSection} onClick={handleNavClick} />
                  <MobileNavLink sectionId="mentoring" text="Mentoring" activeSection={activeSection} onClick={handleNavClick} />
                  <MobileNavLink sectionId="testimonials" text="Kundenfeedback" activeSection={activeSection} onClick={handleNavClick} />
                  <MobileNavLink sectionId="course" text="Produkte" activeSection={activeSection} onClick={handleNavClick} />
                  <MobileNavLink sectionId="kontakt" text="Kontakt" activeSection={activeSection} onClick={handleNavClick} />
                  <div className="border-t border-gray-200 my-2"></div>
                  <a
                    href="/legal.html#impressum"
                    className="block px-4 py-3 rounded-md text-base font-medium transition-colors text-charcoal-700 hover:bg-charcoal-50 hover:text-charcoal-900"
                  >
                    Impressum-Datenschutz
                  </a>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
      <div className="h-16"></div> {/* Spacer for fixed header */}
    </>
  );
};

// Mobile NavLink component with different styling
const MobileNavLink: React.FC<{
  sectionId: string;
  text: string;
  activeSection: string;
  onClick: (sectionId: string) => (e: React.MouseEvent) => void;
}> = ({ sectionId, text, activeSection, onClick }) => (
  <a
    href={`#${sectionId}`}
    onClick={(e) => {
      e.preventDefault();
      onClick(sectionId)(e);
    }}
    className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
      activeSection === sectionId
        ? 'bg-charcoal-100 text-charcoal-900 font-semibold'
        : 'text-charcoal-700 hover:bg-charcoal-50 hover:text-charcoal-900'
    }`}
  >
    {text}
  </a>
);

export default Header;
