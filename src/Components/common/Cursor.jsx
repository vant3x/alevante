import React from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';

const Cursor = ({ mobileMenuOpen }) => {
  const { x, y } = useMousePosition();

  return (
    <div 
      className="fixed w-6 h-6 bg-cyan-400/30 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
      style={{
        left: x - 12,
        top: y - 12,
        transform: `scale(${mobileMenuOpen ? 0 : 1})`
      }}
    />
  );
};

export default Cursor;
