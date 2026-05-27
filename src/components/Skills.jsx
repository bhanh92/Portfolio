import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillList = [
    { name: 'HTML5 & CSS3', level: '95%' },
    { name: 'JavaScript (ES6+)', level: '90%' },
    { name: 'React.js', level: '85%' },
    { name: 'UI/UX Design', level: '80%' },
    { name: 'Tailwind CSS', level: '90%' },
    { name: 'Git & GitHub', level: '85%' },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title fade-in">Kỹ năng <span className="gradient-text">Chuyên Môn</span></h2>
        
        <div className="skills-container glass fade-in">
          {skillList.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
