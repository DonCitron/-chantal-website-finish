import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, isDarkMode, toggleDarkMode }) => {
  return (
    <div className="min-h-screen">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        {children}
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default Layout;