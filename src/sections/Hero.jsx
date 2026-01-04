import React from 'react';
import '../styles/Hero.css';
import { motion } from 'framer-motion';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CodeIcon from '@mui/icons-material/Code';
import BusinessIcon from '@mui/icons-material/Business';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SchoolIcon from '@mui/icons-material/School';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Hero = () => {

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className='hero-container' id='home'>
      {/* Headlines */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className='hero-header'
      >
        <h1 className='hero-title'>
          Build real-world software. <br />
          <span style={{ color: '#ff4c60' }}>Crack real interviews.</span> <br />
          Become a production-ready Full-Stack Developer.
        </h1>
        <p className='hero-subtitle'>
          This is not a theory-heavy course. This is a <b>hands-on, industry-driven</b> program
          designed to take you from basics to deployment, exactly how real IT projects are built.
          <br />
          • Frontend • Backend • Databases • APIs • DevOps • Cloud
        </p>
      </motion.div>

      {/* Feature Cards: Why This Course Works */}
      <motion.div
        className='hero-grid'
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className='feature-card' variants={fadeIn}>
          <EmojiEventsIcon className='card-icon' />
          <h3 className='card-title'>Industry Expert Led</h3>
          <p className='card-text'>Designed by a professional with real project experience. No fluff, just what works in the industry.</p>
        </motion.div>

        <motion.div className='feature-card' variants={fadeIn}>
          <BusinessIcon className='card-icon' />
          <h3 className='card-title'>Production-Ready</h3>
          <p className='card-text'>Focus on interview-oriented and production-level coding. Learn how companies actually build apps.</p>
        </motion.div>

        <motion.div className='feature-card' variants={fadeIn}>
          <CodeIcon className='card-icon' />
          <h3 className='card-title'>End-to-End Project</h3>
          <p className='card-text'>From UI → Backend → Database → Deployment. Build a complete application from scratch.</p>
        </motion.div>
      </motion.div>

      {/* Split Section: Outcome & Audience */}
      <div className='hero-split-section'>
        {/* Outcome */}
        <div className='split-col'>
          <h2 className='section-heading'>🚀 What You Will Become</h2>
          <p className='comparison-text'>After this course, you won’t just say: <br /> <i>"I know Java / React."</i></p>
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '10px 0' }}></div>
          <p className='comparison-text'>You will confidently say:</p>
          <span className='comparison-highlight'>
            "I can design, build, deploy, and explain a complete application."
          </span>
          <p className='card-text' style={{ marginTop: '1rem' }}>That is exactly what companies hire for.</p>
        </div>

        {/* Audience */}
        <div className='split-col'>
          <h2 className='section-heading'>🎓 Who Can Join?</h2>
          <div className='list-item'>
            <SchoolIcon className='list-icon' />
            <span>12th pass / Diploma / Degree students</span>
          </div>
          <div className='list-item'>
            <RocketLaunchIcon className='list-icon' />
            <span>Freshers entering IT</span>
          </div>
          <div className='list-item'>
            <BusinessIcon className='list-icon' />
            <span>Working professionals upgrading skills</span>
          </div>
          <div className='list-item'>
            <CheckCircleIcon className='list-icon' />
            <span>Anyone with a laptop & willingness to learn</span>
          </div>
          <p className='card-text' style={{ marginTop: '1.5rem', fontStyle: 'italic', color: '#ff4c60' }}>
            * No prior experience required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
