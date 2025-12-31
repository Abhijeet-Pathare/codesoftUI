import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className='hero' id='home'>
      <div className='hero-content'>
        <h1>नमस्कार, मी तुमचा <span className='highlight'>Tech Guru</span></h1>
        <h2>
          <b>
            <Typewriter
              words={[
                "आम्ही शास्त्रशुद्ध पद्धतीने coding शिकवतो.",
                "Rooted in values, built for the future",
                // "Java Backend Developer 💻",
                // "Spring Boot Enthusiast 🌱",
                // "MongoDB & Oracle Expert 🛢️",
                // "DevOps Learner 🚀",
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
        {/* <a href="#projects" className='cta-btn'>View My Work</a> */}
      </div>
    </section>
  );
};

export default Hero;
