import React from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: 'Game 2D "Lạc vào khu rừng cấm"',
      desc: 'Game 2D phát triển bằng Java OOP và Spring Boot. Xây dựng hệ thống chiến đấu theo lượt, tích hợp cơ sở dữ liệu đám mây và giao diện Web.',
      image: '/pj1.png',
      tech: ['Java', 'Spring Boot', 'MySQL'],
      github: 'https://github.com/liliustwocout/OOP_N01_Term3_2025_K17_Group19'
    },
    {
      id: 2,
      title: 'Sign Language Translator',
      desc: 'Hệ thống nhận diện ngôn ngữ ký hiệu theo thời gian thực qua Webcam sử dụng AI/ML (CNN, TensorFlow.js) để hỗ trợ người khiếm thính giao tiếp.',
      image: '/pj2.jpg',
      tech: ['Python', 'TensorFlow.js', 'HTML/CSS/JS'],
      github: 'https://github.com/liliustwocout/Sign-Language-Translator'
    },
    {
      id: 3,
      title: 'Website Bán Xe Ô Tô',
      desc: 'Nền tảng thương mại điện tử chuyên mua bán xe ô tô. Xây dựng bằng Laravel (PHP), đầy đủ chức năng quản trị admin, giỏ hàng và xử lý ảnh xe.',
      image: '/pj3.png',
      tech: ['PHP (Laravel)', 'MySQL', 'JavaScript'],
      github: 'https://github.com/dovanduy2005/WebNc_k17_2026_HK2_Group10'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title fade-in">Dự án <span className="gradient-text">Nổi bật</span></h2>

        <div className="projects-grid">
          {projectList.map((project) => (
            <div className="project-card glass fade-in" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" title="Xem trên GitHub"><FaGithub /></a>
                  )}
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
