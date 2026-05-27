import React from 'react';
import './Education.css';
import { useInView } from '../hooks/useAnimations';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const educationData = [
  {
    icon: <FaGraduationCap />,
    title: 'Đại học',
    school: 'Chuyên ngành Công nghệ Thông tin Việt Nhật',
    period: '2023 - Hiện tại',
    desc: 'Đang theo học chương trình Cử nhân CNTT Việt Nhật, tập trung vào Phát triển Web và Công nghệ Phần mềm.',
  },
  {
    icon: <FaCertificate />,
    title: 'Chứng chỉ & Kỹ năng',
    school: 'JLPT N3 & Khóa học Online',
    period: '2023 - 2026',
    desc: 'Đỗ chứng chỉ tiếng Nhật JLPT N3 (12/2025). Hoàn thành các khóa học về React.js, JavaScript nâng cao, UI/UX Design và Machine Learning cơ bản.',
  },
];

const EducationCard = ({ item }) => {
  const [ref, isInView] = useInView();

  return (
    <div ref={ref} className={`education-card glass ${isInView ? 'reveal' : ''}`}>
      <div className="education-icon">{item.icon}</div>
      <div className="education-info">
        <span className="education-period">{item.period}</span>
        <h3>{item.title}</h3>
        <h4>{item.school}</h4>
        <p>{item.desc}</p>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Học vấn <span className="gradient-text">& Chứng chỉ</span></h2>
        <div className="education-grid">
          {educationData.map((item, index) => (
            <EducationCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
