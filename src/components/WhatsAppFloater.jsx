import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../styles/WhatsAppFloater.css';

const WhatsAppFloater = () => {
    return (
        <a
            href="https://chat.whatsapp.com/BmxQdyNzcuz32EPLRFUtHx"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-floater"
            aria-label="Join our WhatsApp Community"
        >
            <WhatsAppIcon className="whatsapp-icon" />
        </a>
    );
};

export default WhatsAppFloater;
