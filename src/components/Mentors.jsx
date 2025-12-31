import React from 'react'
import './css/Mentors.css';

const mentors = [
  {
    name: "Abhijeet Pathare",
    role: "Full Stack Developer",
    experience: "4+ Years Industry Experience",
    skills: "Java, Spring Boot, React, AWS, Microservices",
    image: `${process.env.PUBLIC_URL}/images/abhijeet.jpg`
  },
  {
    name: "Ruturaj Kulkarni",
    role: "MERN Stack Developer",
    experience: "4+ Years Industry Experience",
    skills: "React, JavaScript, CSS, UI/UX",
    image: `${process.env.PUBLIC_URL}/images/ruturaj.jpg`
  }
  
];

const Mentors = () => {
    return (
        <section id='mentors' className='mentors-section'>
            <h2 className='mentors-title'>Meet yout mentors</h2>
            <p className='mentors-subtitle'>
                Learn from industry professionals with real-world project experience
            </p>
            <div className='mentors-container'>
                {mentors.map((mentor,index) => (
                    <div className='mentor-card' key={index}>
                        <img src={mentor.image} alt={mentor.name} />
                        <h3>{mentor.name}</h3>
                        <h4>{mentor.role}</h4>
                        <p className='experience'>{mentor.experience}</p>
                        <p className='skills'>{mentor.skills}</p>

                    </div>
                ))}
            </div>
        </section>
    )
}

export default Mentors
