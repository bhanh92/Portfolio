import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title fade-in">Liên hệ <span className="gradient-text">Với Tôi</span></h2>

        <div className="contact-container glass fade-in">
          <div className="contact-info">
            <h3>Hãy cùng nhau tạo ra điều tuyệt vời!</h3>
            <p>Tôi luôn sẵn sàng cho các cơ hội hợp tác mới. Đừng ngần ngại để lại lời nhắn.</p>

            <div className="contact-details">
              <p><strong>Email:</strong> anhbh0902@gmail.com</p>
              <p><strong>Phone:</strong> 038 298 6248</p>
              <p><strong>Địa chỉ:</strong> Hà Nội, Việt Nam</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Tên của bạn" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email của bạn" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Tin nhắn..." rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">Gửi Tin Nhắn</button>
          </form>
        </div>
      </div>

      <footer className="footer glass">
        <p>© 2026 Portfolio. Built by Bùi Hoài Anh.</p>
      </footer>
    </section>
  );
};

export default Contact;
