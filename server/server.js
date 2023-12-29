import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'your-email-service', // e.g., 'gmail' or use SMTP settings for other services
    auth: {
      user: 'neverclear@ymail.com', // your email address
      pass: 'your-email-password', // your email password
    },
  });
  

  // Email content
  const mailOptions = {
    from: 'your-email@gmail.com', // Update with your email
    to: 'neverclear@ymail.com',
    subject: `New Contact Form Submission from ${name}`,
    text: `From: ${email}\n\n${message}`,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
