import React from 'react';

const getStickyStyle = (): React.CSSProperties => ({
  position: 'fixed',
  left: '50%',
  bottom: window.innerWidth < 600 ? 80 : 24,
  transform: 'translateX(-50%)',
  zIndex: 1000,
  background: '#4A90E2',
  color: '#fff',
  padding: '16px 36px',
  borderRadius: 32,
  fontWeight: 700,
  fontSize: 18,
  boxShadow: '0 4px 24px rgba(74,144,226,0.15)',
  transition: 'opacity 0.4s',
  cursor: 'pointer',
  border: 'none',
});

const StickyCTA: React.FC = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('course');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button style={getStickyStyle()} onClick={handleClick} aria-label="Start Your Journey">
      Start Your Journey
    </button>
  );
};

export default StickyCTA;
