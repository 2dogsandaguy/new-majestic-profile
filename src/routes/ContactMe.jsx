import { useState } from 'react';
import './ContactMe.css'; // Import your CSS file for ContactMe styling
import mailPhoto from "../assets/images/email.jpg";
import PropTypes from 'prop-types';

const EmailLink = ({ emailAddress, subject, name, message, updatedEmail, showEmail  }) => {
  const handleCopyClick = () => {
    // Create a temporary input element to copy the email
    const tempInput = document.createElement('input');
    tempInput.value = emailAddress;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // You can also provide feedback to the user that the email has been copied, for example, show a tooltip or a small message.
  };

  const bodyContent = `Name: ${name}\nEmail: ${updatedEmail}\n\n${message}`;
  const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;

  const handleSendClick = () => {
    window.location.href = mailtoLink;
  };

  return (
    <div className='my-email'>
      {showEmail && <h1>Email: {emailAddress}</h1>}
      {showEmail && (
        <button onClick={handleCopyClick}>
          Copy Email
        </button>
      )}
      {name && emailAddress && subject && message && (
        <button onClick={handleSendClick}>
          Send Email
        </button>
      )}
    </div>
  );
};

EmailLink.propTypes = {
  emailAddress: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  updatedEmail: PropTypes.string.isRequired,
  showEmail: PropTypes.bool.isRequired,
};


const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState(''); // Add subject state
  const [showEmail, setShowEmail] = useState(true);

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
    setShowEmail
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
      <div className="create-container">
      <div className='my-email'>
        {/* Render the EmailLink component with dynamic subject and body */}
        <EmailLink
          emailAddress="neverclear@ymail.com"

          showEmail={showEmail}
        />
      </div>
      <div className="contact-container">
        <h2>Contact Me Form</h2>
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
    </div>
  );
};

export default ContactMe;
