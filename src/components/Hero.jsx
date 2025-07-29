import React from 'react'
import Typical from "react-typical";

const Hero = () => {
  return (
    <section className='hero' id='home'>  
        <div className='hero-content'>
            <h1>Hello, I'm <span className='highlight'>Abhijeet Pathare</span></h1>
            <h2>
              {""}
              <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "Java Backend Developer 💻", 1500,
              "Spring Boot Enthusiast 🌱", 1500,
              "MongoDB & Oracle Expert 🛢️", 1500,
              "DevOps Learner 🚀", 1500,
            ]}
          />

            </h2>
            <a href="#projects" className='cta-btn'>View My Work</a>
        </div>
    </section>
  )
}

export default Hero
