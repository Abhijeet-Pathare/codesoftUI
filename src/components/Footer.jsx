import React from 'react';
import '../styles/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section social">
                    <h3>Connect With Us</h3>
                    <div className="footer-social-icons">
                        <a
                            href="https://www.instagram.com/codesoft__?igsh=MXNqbXNqbjRuOWUzdw=="
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="social-icon instagram"
                        >
                            <InstagramIcon />
                        </a>
                        <a
                            href="https://www.youtube.com/@maharashtrianCoder"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                            className="social-icon youtube"
                        >
                            <YouTubeIcon />
                        </a>
                        <a
                            href="https://chat.whatsapp.com/BmxQdyNzcuz32EPLRFUtHx"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp Community"
                            className="social-icon whatsapp"
                        >
                            <WhatsAppIcon />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-left">&copy; 2026 Codesoft. All rights reserved.</p>
                <p className="footer-right">Built with ❤️ for future developers.</p>
            </div>
        </footer>
    );
};

export default Footer;
