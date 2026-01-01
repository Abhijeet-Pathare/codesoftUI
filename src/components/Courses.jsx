import React, { useEffect } from 'react';
import './css/Courses.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Material UI Icons
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Courses = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const curriculum = [
    {
      title: "Backend Mastery",
      icon: <StorageIcon className='module-icon' />,
      skills: [
        "Core Java & OOPs Concepts",
        "Advanced Java (JDBC, Servlets)",
        "Spring Boot Framework",
        "Microservices Architecture",
        "RESTful API Development"
      ]
    },
    {
      title: "Frontend Magic",
      icon: <CodeIcon className='module-icon' />,
      skills: [
        "HTML5, CSS3 & Responsive Design",
        "JavaScript (ES6+) & DOM",
        "React.js (Hooks, Context API)",
        "State Management (Redux)",
        "Material UI & Tailwind CSS"
      ]
    },
    {
      title: "Database & Cloud",
      icon: <CloudQueueIcon className='module-icon' />,
      skills: [
        "MySQL / PostgreSQL (Relational)",
        "MongoDB (NoSQL)",
        "Database Design & Normalization",
        "AWS Basics (EC2, S3, RDS)",
        "Deployment & Hosting"
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <BuildIcon className='module-icon' />,
      skills: [
        "Git & GitHub (Version Control)",
        "Docker & Containerization",
        "Maven & Gradle Build Tools",
        "Postman API Testing",
        "Agile/Scrum Methodology"
      ]
    }
  ];

  return (
    <section id='courses' className='courses-section'>
      <div className='section-header-box' data-aos="fade-up">
        <h2 className='section-title'>Java Full Stack Developer</h2>
        <p className='section-subtitle'>
          Our comprehensive curriculum is designed to transform you into a complete software engineer.
          We cover everything from the foundation to advanced deployment strategies.
        </p>
      </div>

      <div className='curriculum-grid'>
        {curriculum.map((module, index) => (
          <div key={index} className='module-card' data-aos="fade-up" data-aos-delay={index * 100}>
            <div className='module-header'>
              {module.icon}
              <h3 className='module-title'>{module.title}</h3>
            </div>
            <ul className='skills-list'>
              {module.skills.map((skill, idx) => (
                <li key={idx} className='skill-item'>
                  <CheckCircleIcon className='check-icon' />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Courses
