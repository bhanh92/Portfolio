import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'glass' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">
          <span className="gradient-text">Portfolio</span>
        </a>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Trang chủ</a></li>
          <li><a href="#about" onClick={closeMenu}>Giới thiệu</a></li>
          <li><a href="#skills" onClick={closeMenu}>Kỹ năng</a></li>
          <li><a href="#experience" onClick={closeMenu}>Kinh nghiệm</a></li>
          <li><a href="#projects" onClick={closeMenu}>Dự án</a></li>
          <li><a href="#contact" className="btn btn-primary nav-btn" onClick={closeMenu}>Liên hệ</a></li>
        </ul>

        {menuOpen && <div className="nav-overlay" onClick={closeMenu} />}
      </div>
    </nav>
  );
};

export default Navbar;
