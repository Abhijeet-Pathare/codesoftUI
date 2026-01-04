import React, { useState } from 'react';
import '../styles/Services.css';
import Courses from './Courses';
import Mentors from './Mentors';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';

// Icons
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Services = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Lock scroll when modal is open
    React.useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isModalOpen]);

    const services = [
        {
            id: 'fullstack',
            title: "Java Full Stack Developer",
            desc: "Our flagship 4-month program. Master Java, Spring Boot, React, and AWS from scratch.",
            icon: <SchoolIcon className="service-icon" />,
            highlight: true,
            action: () => setIsModalOpen(true),
            buttonText: "View Details"
        },
        {
            id: 'resume',
            title: "ATS-Ready Resumes",
            desc: "Get a professional, high-scoring resume designed specifically for IT and Developer roles.",
            icon: <DescriptionIcon className="service-icon" />,
        },
        {
            id: 'portfolio',
            title: "Dynamic Portfolios",
            desc: "We build stunning personal websites to showcase your skills and projects to employers.",
            icon: <AccountCircleIcon className="service-icon" />,
        },
        {
            id: 'static',
            title: "Business Websites",
            desc: "Professional static and dynamic websites for startups, individuals, and small businesses.",
            icon: <LanguageIcon className="service-icon" />,
        },
        {
            id: 'interviews',
            title: "Mock Interviews",
            desc: "Prepare for the real world with technical mock interviews and detailed feedback sessions.",
            icon: <RecordVoiceOverIcon className="service-icon" />,
        },
        {
            id: 'mentorship',
            title: "1-on-1 Mentorship",
            desc: "Get personalized career guidance and doubt-solving from industry experts.",
            icon: <WorkIcon className="service-icon" />,
        }
    ];

    return (
        <section className="services-section" id="services">
            <div className="section-header">
                <h2 className="section-title gradient-text">Our Services</h2>
                <p className="section-subtitle">
                    More than just a course. We provide the tools and support
                    you need to succeed in the tech industry.
                </p>
            </div>

            <div className="services-grid">
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        className={`service-card ${service.highlight ? 'highlight-card' : ''}`}
                        whileHover={{ y: -10 }}
                    >
                        <div className="service-icon-wrapper">
                            {service.icon}
                        </div>
                        <h3 className="service-card-title">{service.title}</h3>
                        <p className="service-card-desc">{service.desc}</p>

                        {service.id === 'fullstack' && (
                            <button className="service-btn" onClick={service.action}>
                                {service.buttonText}
                                <KeyboardArrowDownIcon />
                            </button>
                        )}
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
                                <CloseIcon />
                            </button>

                            <div className="modal-inner-content">
                                <Courses />
                                <div className="modal-divider" />
                                <Mentors />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Services;
