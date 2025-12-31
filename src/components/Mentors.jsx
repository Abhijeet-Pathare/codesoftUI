import React from 'react'
import './css/Mentors.css';

const mentors = [
  {
    name: "Abhijeet Pathare",
    role: "Full Stack Developer",
    experience: "4+ Years Industry Experience",
    skills: "Java, Spring Boot, React, AWS, Microservices",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHbF_7sRtBOGg/profile-displayphoto-scale_400_400/B4DZrgWtHpJAAg-/0/1764700641569?e=1769040000&v=beta&t=mM_jp-Q8T6mlOErp4f39lgZguxZBpB0vQ-CpSTUGdpE"
  },
  {
    name: "Ruturaj Kulkarni",
    role: "MERN Stack Developer",
    experience: "4+ Years Industry Experience",
    skills: "React, JavaScript, CSS, UI/UX",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGq8_ONqNZvag/profile-displayphoto-scale_400_400/B4DZsi7fwSJAAg-/0/1765817582032?e=1769040000&v=beta&t=r0i54Q0eoohJxKxQ_IeR3yKXdLN5LsH5bSAUqwWH5oU"
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
