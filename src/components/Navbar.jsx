import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'glass' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">
          <span className="gradient-text">Portfolio</span>
        </a>
        <ul className="nav-links">
          <li><a href="#home">Trang chủ</a></li>
          <li><a href="#about">Giới thiệu</a></li>
          <li><a href="#skills">Kỹ năng</a></li>
          <li><a href="#projects">Dự án</a></li>
          <li><a href="#contact" className="btn btn-primary nav-btn">Liên hệ</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
