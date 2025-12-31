import React from 'react'
import './css/Courses.css'

const Courses = () => {
  const courseTopics = [
    'Core Java',
    'JDBC',
    'Spring Boot',
    'JavaScript',
    'ES6',
    'React js',
    'HTML',
    'CSS',
    'MongoDB',
    'SQL',
    ];

  const courseTools = [
    'GIT','GitHub','Postman','Debugging'
  ]
  return (
    <section id='courses' className='courses-section'>
        <h2>Courses</h2>
        <div className='container' data-aos="fade-up">
        <h2 className="section-title">Java Full Stack Course</h2>
        <p className="section-subtitle">You will learn technologies:</p>
        <ul className="course-list">
          {courseTopics.map((topic, index) => (
            <li key={index} className="course-item" data-aos="zoom-in">
              {topic}
            </li>
          ))}
        </ul>
      </div>
      <div className='container' data-aos="fade-up">
      <p className="section-subtitle">You will tools:</p>
      <ul className='course-list'>
          {courseTools.map((tool,index) => (
            <li key={index} className='course-item' data-aos="zoom-in">
              {tool}
            </li>
          ))}
        </ul>
        </div>
    </section>
  )
}

export default Courses
