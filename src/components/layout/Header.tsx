import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const location = useLocation();
  
  // Check if the current route matches the nav item
  const isActive = (path: string) => location.pathname === path;
  
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
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cream-50/95 dark:bg-charcoal-900/95 backdrop-blur-sm py-3 shadow-md' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="group">
          <motion.h1 
            className="text-2xl font-serif font-medium tracking-tight"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Julia Ulrich
            <span className="text-accent-600 dark:text-accent-400">.</span>
            <span className="block text-xs font-sans uppercase tracking-widest mt-1 text-charcoal-500 dark:text-charcoal-400">
              Contemporary Artist
            </span>
          </motion.h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <motion.div 
            className="flex space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
              About
            </Link>
            <Link to="/gallery" className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}>
              Gallery
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
              Contact
            </Link>
          </motion.div>
          
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-colors"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 mr-2 rounded-full hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-colors"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <motion.div 
        className={`md:hidden fixed top-[60px] left-0 right-0 bg-cream-50 dark:bg-charcoal-900 shadow-md z-30 ${mobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <nav className="container mx-auto py-6 px-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link to="/" className={`block py-2 ${isActive('/') ? 'text-accent-600 dark:text-accent-400' : ''}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`block py-2 ${isActive('/about') ? 'text-accent-600 dark:text-accent-400' : ''}`}>
                About
              </Link>
            </li>
            <li>
              <Link to="/gallery" className={`block py-2 ${isActive('/gallery') ? 'text-accent-600 dark:text-accent-400' : ''}`}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`block py-2 ${isActive('/contact') ? 'text-accent-600 dark:text-accent-400' : ''}`}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;