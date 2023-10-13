import React, { useState, useEffect } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [animate, setAnimate] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      return;
    }

    setName('');
    setEmail('');
    setMessage('');

    e.target.submit();
  };

  return (
    <section id="Contact-Me" className="contact-me">
      <div className="contact-background">
        <form className={`contact-form ${animate ? 'contact-form-entered' : 'contact-form-entering'}`} action="https://formspree.io/f/mvojpbbn" method="POST" onSubmit={handleSubmit}>
          <h2>Contact me</h2>
          <p>
            If you have an application you are interested in developing,
            a feature that you need built or a project that needs coding.
            I’d love to help with it!
          </p>
          <input type="text" placeholder="Enter your name" name="user_name" minLength="4" maxLength="30" onChange={handleNameChange} required />
          <input type="email" placeholder="Enter your email" name="user_email" onChange={handleEmailChange} required />
          <textarea className="form-textarea" maxLength="500" rows="5" cols="40" name="message" placeholder="Write your message here..." form="form" onChange={handleMessageChange} />
          <button type="submit">Get in Touch</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
