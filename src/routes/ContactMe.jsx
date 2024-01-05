import  { useState } from 'react';
import './ContactMe.css'; // Import your CSS file for ContactMe styling
import mailPhoto from "../assets/images/email.jpg";
import PropTypes from 'prop-types';

const EmailLink = ({ emailAddress, subject, name, message, updatedEmail  }) => {
  const bodyContent = `Name: ${name}\nEmail: ${updatedEmail}\n\n${message}`;
  const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;

  const handleButtonClick = () => {
    window.location.href = mailtoLink;
  };

  return (
    <button onClick={handleButtonClick}>
      Send Email
    </button>
  );
};

EmailLink.propTypes = {
  emailAddress: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  updatedEmail: PropTypes.string.isRequired,
};


const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState(''); // Add subject state

  // Update email state on input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ name, email, message, subject }), // Include subject in the form data
      });

      if (response.ok) {
        console.log('Email sent successfully!');
      } else {
        console.error('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    // Clear the form fields after submission
    setName('');
    setEmail('');
    setMessage('');
    setSubject('');
  };

  return (
    <div
      className="create-container"
      style={{
        backgroundImage: `url(${mailPhoto})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'relative',
      }}
    >
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form className="contact-form" action="http://localhost:3001/send-email" method="POST" onSubmit={handleSubmit}>
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
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
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
          {/* Render the EmailLink component with dynamic subject and body */}
          <EmailLink
            emailAddress="neverclear@ymail.com"
            subject={subject}
            name={name}
            message={message}
            updatedEmail={email}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
