import React from 'react'
import './css/Courses.css'

const Courses = () => {
  const courseTopics = ['React.js',
    'Core Java',
    'Spring Boot',
    'MongoDB',
    'SQL',
    'HTML',
    'CSS',];
  return (
    <section id='courses' className='courses-section'>
        <h2>Courses</h2>
        <div className='container' data-aos="fade-up">
        <h2 className="section-title">Java Full Stack Course</h2>
        <p className="section-subtitle">Includes the following technologies:</p>
        <ul className="course-list">
          {courseTopics.map((topic, index) => (
            <li key={index} className="course-item" data-aos="zoom-in">
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Courses
