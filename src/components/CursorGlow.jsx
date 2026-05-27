import React, { useEffect, useState } from 'react';
import './CursorGlow.css';

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div
      className={`cursor-glow ${visible ? 'visible' : ''}`}
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
    />
  );
};

export default CursorGlow;
