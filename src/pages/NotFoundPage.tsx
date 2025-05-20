import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

/**
 * NotFoundPage - Eine benutzerfreundliche 404-Seite mit Animationen
 * und hilfreichen Links zur Navigation zurück zur Hauptseite
 */
const NotFoundPage: React.FC = () => {
  // Animationsvarianten
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <motion.div 
        className="text-center max-w-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          variants={itemVariants} 
          className="text-9xl font-bold text-[#D17C6B] mb-4"
        >
          404
        </motion.div>
        
        <motion.h1 
          variants={itemVariants} 
          className="text-3xl font-semibold mb-4"
        >
          Seite nicht gefunden
        </motion.h1>
        
        <motion.p 
          variants={itemVariants} 
          className="text-gray-600 mb-8"
        >
          Die von dir gesuchte Seite existiert leider nicht oder wurde verschoben.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#D17C6B] text-white rounded-lg font-medium hover:bg-[#C06A5A] transition-colors"
          >
            <Home size={18} />
            Zur Startseite
          </Link>
          
          <button 
            onClick={() => window.history.back()} 
            className="flex items-center justify-center gap-2 px-6 py-3 border border-[#D17C6B] text-[#D17C6B] rounded-lg font-medium hover:bg-[#D17C6B10] transition-colors"
          >
            <ArrowLeft size={18} />
            Zurück
          </button>
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="mt-12 text-sm text-gray-500"
        >
          <p>
            Brauchst du Hilfe? <a href="#contact" className="text-[#D17C6B] underline">Kontaktiere uns</a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;