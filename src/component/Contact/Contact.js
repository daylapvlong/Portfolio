import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5azsjbp', 'template_4vb5gt9', form.current, '7XCtia89rnu3dVQJR')
      .then((result) => {
          console.log(result.text);
      }, (error) => { 
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div className="contact">
      <h1>Contact.</h1>
      <h2>Reach Out to me by form or directly on <a href="mailto:phmvtlong@gmail.com">phmvtlong@gmail.com</a></h2>
      
      <form ref={form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Name'
          name="user_name"
          required
        />
        <input 
          type="text"
          placeholder='Email'
          name="user_email"
          required
        />
        <textarea
          name="message" 
          placeholder='Message'
          required
        />
        <button type="submit">Send Message</button>
      </form>
      
    </div>
  );
}

export default Contact;