import React from 'react'
import '../styles/Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Vehicle Service Management System',
      description: 'A full-stack system using Spring Boot and React to manage service bookings, invoices, and reports.',
    },
    {
      title: 'Quiz Web App',
      description: 'React + Node.js-based quiz app with timer, scoring, and result analytics.',
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio with smooth scrolling and theme toggler.',
    },
  ];
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
