import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, X } from 'lucide-react';

interface DesignSwitcherProps {
  onDesignChange?: (designType: string) => void;
}

/**
 * DesignSwitcher - Ermöglicht das Umschalten zwischen verschiedenen Design-Varianten
 * und speichert die Auswahl in localStorage.
 */
const DesignSwitcher: React.FC<DesignSwitcherProps> = ({ onDesignChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDesign, setCurrentDesign] = useState<string>(
    localStorage.getItem('designType') || 'original'
  );

  useEffect(() => {
    // Beim ersten Laden den Stil aus dem lokalen Speicher laden
    const savedDesign = localStorage.getItem('designType') || 'original';
    if (savedDesign === 'enhanced') {
      switchDesign('enhanced');
    }
  }, []);

  const switchDesign = (designType: string) => {
    // Design-Typ im lokalen Speicher speichern
    localStorage.setItem('designType', designType);
    setCurrentDesign(designType);
    
    // Callback aufrufen, wenn vorhanden
    if (onDesignChange) {
      onDesignChange(designType);
    }
    
    // Wir verwenden nun CSS-Variablen und Klassen statt separate Stylesheets
    if (designType === 'enhanced') {
      document.documentElement.classList.add('enhanced-design');
    } else {
      document.documentElement.classList.remove('enhanced-design');
    }
  };

  const toggleSwitcher = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Toggle Button */}
      <motion.button
        onClick={toggleSwitcher}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Designauswahl schließen" : "Designauswahl öffnen"}
      >
        {isOpen ? <X size={20} /> : <Palette size={20} color="#D17C6B" />}
      </motion.button>
      
      {/* Design Options Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: 20, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-xl mt-3 overflow-hidden"
            style={{ width: 200 }}
          >
            <div className="p-4">
              <h3 className="text-sm font-semibold mb-3">Design wählen:</h3>
              
              <div className="space-y-2">
                <button 
                  onClick={() => switchDesign('original')} 
                  className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                    currentDesign === 'original' 
                      ? 'bg-[#D17C6B] text-white' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  Original
                </button>
                <button 
                  onClick={() => switchDesign('enhanced')} 
                  className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                    currentDesign === 'enhanced' 
                      ? 'bg-[#D17C6B] text-white' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  Verbessert
                </button>
              </div>
              
              <p className="text-xs text-gray-500 mt-3">
                Das ausgewählte Design wird gespeichert und bei zukünftigen Besuchen verwendet.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DesignSwitcher;