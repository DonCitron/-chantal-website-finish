import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-20 min-h-[70vh] flex items-center justify-center"
    >
      <div className="text-center">
        <motion.h1 
          className="text-8xl md:text-9xl font-serif font-medium text-accent-600 dark:text-accent-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          404
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl font-serif mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Page Not Found
        </motion.h2>
        <motion.p
          className="max-w-md mx-auto mb-8 text-charcoal-600 dark:text-charcoal-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center btn btn-primary"
          >
            <ArrowLeft size={18} className="mr-2" /> Back to Home
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;