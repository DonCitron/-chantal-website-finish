import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * CustomCursor - Ein verbesserter custom Cursor, der sich mit dem Mauszeiger bewegt
 * und auf Interaktionen reagiert (Klicks, Hover über Links/Buttons)
 */
const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Nur auf Desktop-Geräten anzeigen
    const checkMobile = /iPhone|iPad|iPod|Android|Windows Phone|BlackBerry/i.test(navigator.userAgent);
    setIsMobile(checkMobile);
    
    if (checkMobile) return;
    
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleLinkHoverStart = (e: MouseEvent) => {
      // Prüfen, ob das Element ein Link, Button oder ein anderes interaktives Element ist
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setLinkHovered(true);
      }
    };
    
    const handleLinkHoverEnd = () => {
      setLinkHovered(false);
    };
    
    const handleMouseLeave = () => {
      setHidden(true);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleLinkHoverStart);
    document.addEventListener('mouseout', handleLinkHoverEnd);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleLinkHoverStart);
      document.removeEventListener('mouseout', handleLinkHoverEnd);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Wenn mobile, dann keinen benutzerdefinierten Cursor anzeigen
  if (isMobile) return null;

  return (
    <>
      {/* Äußerer Cursor-Ring */}
      <motion.div
        className="pointer-events-none fixed z-50 mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          width: linkHovered ? 60 : 40,
          height: linkHovered ? 60 : 40,
          opacity: hidden ? 0 : 0.5,
          scale: clicked ? 0.8 : 1,
        }}
        transition={{ 
          type: 'spring', 
          stiffness: 300, 
          damping: 28, 
          mass: 0.5 
        }}
      >
        <div 
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '1.5px solid white',
            backgroundColor: 'transparent'
          }}
        />
      </motion.div>
      
      {/* Innerer Cursor-Punkt */}
      <motion.div
        className="pointer-events-none fixed z-50 mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          width: clicked ? 10 : 8,
          height: clicked ? 10 : 8,
          opacity: hidden ? 0 : 1,
          scale: linkHovered ? 0 : 1,
        }}
        transition={{ 
          type: 'spring', 
          stiffness: 400, 
          damping: 25, 
          mass: 0.3 
        }}
      >
        <div 
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            backgroundColor: 'white'
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;