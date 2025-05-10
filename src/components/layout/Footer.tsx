import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Instagram size={18} />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <Twitter size={18} />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <Facebook size={18} />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <Mail size={18} />, url: 'mailto:contact@chantisreflection.com', label: 'Email' },
  ];
  
  const footerLinks = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Gallery', path: '/gallery' },
    { text: 'Contact', path: '/contact' },
    { text: 'Privacy Policy', path: '#' },
    { text: 'Terms of Service', path: '#' },
  ];

  return (
    <footer className="bg-cream-100 dark:bg-charcoal-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-serif font-medium mb-4">
              Chanti's Self Reflection
              <span className="text-accent-600 dark:text-accent-400">.</span>
            </h3>
            <p className="text-sm text-charcoal-600 dark:text-charcoal-300 mb-6 max-w-md">
              Contemporary artist exploring the boundaries between abstraction and figurative art, 
              focusing on the interplay of light, color, and emotion.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 rounded-full border border-charcoal-200 dark:border-charcoal-700 
                           hover:bg-accent-100 dark:hover:bg-charcoal-800 
                           hover:border-accent-400 dark:hover:border-accent-600
                           transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-serif font-medium mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-sm text-charcoal-600 dark:text-charcoal-300 hover:text-accent-600 
                              dark:hover:text-accent-400 transition-colors duration-300"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-serif font-medium mb-4">Stay Updated</h3>
            <p className="text-sm text-charcoal-600 dark:text-charcoal-300 mb-4">
              Subscribe to receive updates on new artworks, exhibitions, and events.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 w-full bg-white dark:bg-charcoal-800 border border-charcoal-200 
                         dark:border-charcoal-700 rounded-l focus:outline-none focus:ring-1 
                         focus:ring-accent-400 text-sm"
                aria-label="Email address"
              />
              <button 
                type="submit" 
                className="bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-r 
                         text-sm font-medium transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-charcoal-200 dark:border-charcoal-800 text-center">
          <p className="text-xs text-charcoal-500 dark:text-charcoal-400">
            © {currentYear} Chanti's Self Reflection. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;