import React from 'react';
import './Hero.css';
import { useTypingEffect } from '../hooks/useAnimations';

const Hero = () => {
  const typedText = useTypingEffect([
    'Front-End Developer',
    'UI/UX Enthusiast',
    'Người yêu công nghệ',
  ], 80, 50, 2000);

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content fade-in">
          <h4>Xin chào, tôi là</h4>
          <h1 className="hero-title">
            <span className="gradient-text name-font">Bùi Hoài Anh</span>
          </h1>
          <h2 className="hero-subtitle">
            {typedText}<span className="typing-cursor">|</span>
          </h2>
          <p className="hero-description">
            Tôi đam mê xây dựng những trải nghiệm web đẹp mắt, nhanh chóng và thân thiện với người dùng.
            Kết hợp giữa nghệ thuật thiết kế và logic lập trình để tạo ra các sản phẩm digital ấn tượng.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">Xem Dự Án</a>
            <a href="#contact" className="btn btn-outline">Liên hệ ngay</a>
          </div>
        </div>
        <div className="hero-image-container floating">
          <div className="hero-shape glass">
            <img src="/ha.jpg" alt="Avatar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
