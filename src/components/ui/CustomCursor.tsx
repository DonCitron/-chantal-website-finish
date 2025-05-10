import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) return;
    
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleLinkHoverStart = (e: MouseEvent) => {
      // Check if the hovered element is a link or button
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
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

  const cursorClasses = `
    custom-cursor 
    transition-all 
    duration-150 
    ease-out 
    transform 
    ${hidden ? 'opacity-0' : 'opacity-100'} 
    ${clicked ? 'scale-75' : ''} 
    ${linkHovered ? 'scale-150 mix-blend-difference' : ''}
  `;

  return (
    <div 
      className={cursorClasses}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) ${clicked ? 'scale(0.75)' : ''} ${linkHovered ? 'scale(1.5)' : ''}` 
      }}
    />
  );
};

export default CustomCursor;