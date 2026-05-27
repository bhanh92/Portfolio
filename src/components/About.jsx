import React from 'react';
import './About.css';
import { FaLaptopCode, FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title fade-in">Về <span className="gradient-text">Bản Thân</span></h2>
        
        <div className="about-content">
          <div className="about-text glass fade-in">
            <p>
              Tôi là một Front-End Developer với niềm đam mê mãnh liệt trong việc tạo ra các giao diện web tối ưu, 
              đẹp mắt và mang lại trải nghiệm xuất sắc cho người dùng.
            </p>
            <p>
              Với tư duy năng động và luôn cập nhật công nghệ mới, tôi biến những ý tưởng phức tạp thành 
              những dòng code tinh tế và trực quan nhất.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card glass floating" style={{ animationDelay: '0s' }}>
              <FaLaptopCode className="about-icon" />
              <h3>Code Sạch</h3>
              <p>Viết mã dễ đọc, dễ bảo trì và mở rộng.</p>
            </div>
            <div className="about-card glass floating" style={{ animationDelay: '0.2s' }}>
              <FaLightbulb className="about-icon" />
              <h3>Sáng Tạo</h3>
              <p>Luôn tìm tòi giải pháp UI/UX mới mẻ.</p>
            </div>
            <div className="about-card glass floating" style={{ animationDelay: '0.4s' }}>
              <FaRocket className="about-icon" />
              <h3>Hiệu Suất</h3>
              <p>Tối ưu hóa tốc độ tải trang tối đa.</p>
            </div>
            <div className="about-card glass floating" style={{ animationDelay: '0.6s' }}>
              <FaUsers className="about-icon" />
              <h3>Làm Việc Nhóm</h3>
              <p>Kỹ năng giao tiếp và cộng tác hiệu quả.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
