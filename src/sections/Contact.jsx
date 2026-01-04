import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const formData = new FormData(form.current);
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{10}$/;

    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const mobile = formData.get('user_mobile');

    if (!name || name.trim() === '') {
      newErrors.user_name = 'Name is required';
    }

    if (!email || !emailRegex.test(email)) {
      newErrors.user_email = 'Valid email is required';
    }

    if (!mobile || !mobileRegex.test(mobile)) {
      newErrors.user_mobile = 'Valid 10-digit mobile number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSending(true);
    setMessage(null);

    // Replace these with your actual Service ID, Template ID, and Public Key
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setIsSending(false);
          setMessage({ type: 'success', text: 'Message sent successfully!' });
          form.current.reset();
          setErrors({});
        },
        (error) => {
          setIsSending(false);
          setMessage({ type: 'error', text: 'Failed to send message. Please try again.' });
          console.error('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input type="text" name="user_name" placeholder="Your Name" />
            {errors.user_name && <span className="error-text">{errors.user_name}</span>}
          </div>

          <div className="form-group">
            <input type="email" name="user_email" placeholder="Your Email" />
            {errors.user_email && <span className="error-text">{errors.user_email}</span>}
          </div>

          <div className="form-group">
            <input type="tel" name="user_mobile" placeholder="Your Mobile No." />
            {errors.user_mobile && <span className="error-text">{errors.user_mobile}</span>}
          </div>

          <div className="form-group">
            <textarea name="message" rows="5" placeholder="Your Message (Optional)"></textarea>
          </div>

          <button type="submit" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
          {message && (
            <p className={`message ${message.type}`}>
              {message.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
