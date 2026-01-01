import React, { useEffect } from 'react';
import './css/Mentors.css';
import BusinessIcon from '@mui/icons-material/Business';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AOS from 'aos';
import 'aos/dist/aos.css';

const mentors = [
    {
        name: "Abhijeet Pathare",
        role: "Full Stack Developer",
        experience: "4+ Years Experience",
        skills: ["Java", "Spring Boot", "React", "AWS", "Microservices"],
        image: `${process.env.PUBLIC_URL}/images/abhijeet.jpg`
    },
    {
        name: "Ruturaj Kulkarni",
        role: "MERN Stack Developer",
        experience: "4+ Years Experience",
        skills: ["React", "JavaScript", "Node.js", "MongoDB", "UI/UX"],
        image: `${process.env.PUBLIC_URL}/images/ruturaj.jpg`
    }
];

const Mentors = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id='mentors' className='mentors-section'>
            <div data-aos="fade-up">
                <h2 className='mentors-title'>Meet Your Mentors</h2>
                <p className='mentors-subtitle'>
                    Learn directly from industry professionals who have built scalable systems for top companies.
                </p>
            </div>

            <div className='mentors-container'>
                {mentors.map((mentor, index) => (
                    <div className='mentor-card' key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                        <img src={mentor.image} alt={mentor.name}
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/150?text=Mentor" }}
                        />
                        <h3>{mentor.name}</h3>
                        <h4>{mentor.role}</h4>

                        {/* <div className='mentor-company'>
                            <BusinessIcon fontSize="small" />
                            <span>{mentor.company}</span>
                        </div> */}

                        <p className='experience'>
                            <WorkspacePremiumIcon sx={{ fontSize: 16, verticalAlign: 'middle', marginRight: '4px' }} />
                            {mentor.experience}
                        </p>

                        <div className='skills-container'>
                            {mentor.skills.map((skill, idx) => (
                                <span key={idx} className='skill-badge'>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Mentors
