import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

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

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const socialLinks = [
    { icon: <SpotifyIcon />, url: 'http://open.spotify.com/show/5aXhid2UTtgioftEV7ESPa', label: 'Spotify' },
    { icon: <Instagram size={18} />, url: 'https://instagram.com/chantiheulleise', label: 'Instagram' },
    { icon: <LinktreeIcon />, url: 'https://linktr.ee/chantiheulleise', label: 'Linktree' },
    { icon: <Mail size={18} />, url: 'mailto:chantalroeth2@web.de', label: 'Email' },
  ];
  
  const footerLinks = [
    { text: 'Home', path: '/' },
    { text: 'Über mich', path: '/#ueber-mich' },
    { text: 'Mentoring', path: '/#mentoring' },
    { text: 'Produkte', path: '/#course' },
    { text: 'Kontakt', path: '/#contact' },
    { text: 'Impressum', path: '#' },
    { text: 'Datenschutz', path: '#' },
  ];

  return (
    <footer className="pt-16 pb-8" style={{
        background: isDarkMode 
          ? '#232326' // Same dark background as other sections in dark mode
          : 'var(--gradient-terra)', // Keep terracotta gradient for light mode
        color: '#ffffff'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-medium mb-4">
              Open Mind Circle
              <span className="text-accent-600 dark:text-accent-400">.</span>
            </h3>
            <p className="text-sm text-charcoal-200 mb-6 max-w-md">
              Hier beginnt deine Reise zu mehr Leichtigkeit, Tiefe und Selbstvertrauen mit Chantal Röth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 rounded-full border border-white/30 
                           hover:bg-white/10
                           hover:border-white/50
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
            <h3 className="text-lg font-medium mb-4">Seiten</h3>
            <ul className="grid grid-cols-1 gap-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-sm text-charcoal-200 hover:text-white 
                              transition-colors duration-300"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-medium mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-charcoal-200">
                <Mail size={16} />
                <a href="mailto:chantalroeth2@web.de" className="text-sm hover:text-white transition-colors duration-300">
                  chantalroeth2@web.de
                </a>
              </li>
              <li className="flex items-start gap-2 text-charcoal-200 mt-2">
                <MapPin size={16} style={{ marginTop: 2 }} />
                <span className="text-sm">
                  Open Mind Circle<br />
                  Sennteich 16<br />
                  68199 Mannheim
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-white/20 flex justify-between items-center">
          <p className="text-sm text-charcoal-200">
            © {currentYear} Open Mind Circle. Alle Rechte vorbehalten.
          </p>
          
          <button 
            onClick={handleScrollToTop} 
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
            aria-label="Nach oben scrollen"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;