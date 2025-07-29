import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className='hero' id='home'>
      <div className='hero-content'>
        <h1>Hello, I'm <span className='highlight'>Abhijeet Pathare</span></h1>
        <h2>
          <b>
            <Typewriter
              words={[
                "Java Backend Developer 💻",
                "Spring Boot Enthusiast 🌱",
                "MongoDB & Oracle Expert 🛢️",
                "DevOps Learner 🚀",
              ]}
              loop={0} // 0 = infinite
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </b>
        </h2>
        <a href="#projects" className='cta-btn'>View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
