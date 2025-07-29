import React from 'react'
import './css/Skills.css'

const Skills = () => {
  const skills = ['Java', 'Spring Boot', 'React', 'HTML', 'CSS', 'MongoDB', 'SQL', 'Git', 'Docker'];

  return (
    <section id='skills' className='skills-section'>
        <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
