import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import PremiumPage from './pages/PremiumPage';
import ProductPage from './pages/ProductPage';
import LandingPage from './pages/LandingPage';
import AllImagesPage from './pages/AllImagesPage';

// Components
import Layout from './components/layout/Layout';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPremium, setIsPremium] = useState(false); // Mock premium state
  
  // Check for user's preferred color scheme
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
    
    // Listen for changes in color scheme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  // Apply dark mode class to html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Premium content route wrapper
  const PremiumContentRoute = ({ children }: { children: React.ReactNode }) => {
    if (!isPremium) {
      return <Navigate to="/premium" replace />;
    }
    return <>{children}</>;
  };

  return (
    <>
      <Router>
        <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/premium" element={<PremiumPage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/gallery" element={
                <PremiumContentRoute>
                  <GalleryPage />
                </PremiumContentRoute>
              } />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/all-images" element={<AllImagesPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AnimatePresence>
        </Layout>
      </Router>
    </>
  );
}

export default App;