import React from 'react';
import './css/Contact.css'

const Contact = () => (
  <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
);

export default Contact;
