import React from 'react';
import { useInView } from '../hooks/useAnimations';

const ScrollReveal = ({ children, className = '' }) => {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isInView ? 'revealed' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
