import { useState } from 'react';
import './ContactMe.css'; // Import your CSS file for ContactMe styling
import mailPhoto from "../assets/images/email.jpg"
const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform your desired action with the form data
    console.log('Form submitted:', { name, email, message });

    // Clear the form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div
      className="create-container"
      style={{
        backgroundImage: `url(${mailPhoto})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        /* overflow: 'hidden', */
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        Height: '100vh',
        position: 'relative',
        overflowY: 'auto',
      }}
    >
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ContactMe;
