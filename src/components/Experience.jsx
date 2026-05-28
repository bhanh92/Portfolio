import React from 'react';
import './Experience.css';
import { useInView } from '../hooks/useAnimations';

const experienceData = [
  {
    year: '2023 - Hiện tại',
    title: 'Full-Stack Developer',
    place: 'Sinh viên năm 3 - Đại học',
    desc: 'Tập trung phát triển kỹ năng lập trình web, tham gia các dự án thực tế với nhóm và xây dựng portfolio cá nhân.',
  },
  {
    year: '2025',
    title: 'Dự án Game 2D (Java OOP)',
    place: 'Nhóm 3 người',
    desc: 'Phát triển game "Lạc vào khu rừng cấm" sử dụng Java OOP, Spring Boot và MySQL. Thiết kế hệ thống chiến đấu theo lượt.',
  },
  {
    year: '2025',
    title: 'Dự án Sign Language Translator',
    place: 'Nhóm 3 người',
    desc: 'Xây dựng hệ thống nhận diện ngôn ngữ ký hiệu thời gian thực bằng AI/ML (CNN, TensorFlow.js) hỗ trợ người khiếm thính.',
  },
  {
    year: '2026',
    title: 'Dự án Website Bán Xe Ô Tô',
    place: 'Nhóm 3 người',
    desc: 'Phát triển nền tảng thương mại điện tử sử dụng Laravel (PHP), MySQL với đầy đủ chức năng quản trị admin.',
  },
];

const TimelineItem = ({ item, index }) => {
  const [ref, isInView] = useInView();
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`timeline-item ${isLeft ? 'left' : 'right'} ${isInView ? 'reveal' : ''}`}
    >
      <div className="timeline-content glass">
        <span className="timeline-year">{item.year}</span>
        <h3>{item.title}</h3>
        <h4>{item.place}</h4>
        <p>{item.desc}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Kinh nghiệm <span className="gradient-text">& Dự án</span></h2>
        <div className="timeline">
          <div className="timeline-line" />
          {experienceData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
