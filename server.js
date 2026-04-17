const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Configure your email service here
// Option 1: Gmail (requires app-specific password)
// Option 2: Any other SMTP service

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'avi996631@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'your-app-password-here' // Use app-specific password for Gmail
  }
});

app.post('/api/send-email', async (req, res) => {
  try {
    const { user_email, user_name, subject, message } = req.body;

    // Validate inputs
    if (!user_email || !user_name || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'All fields are required' 
      });
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'avi996631@gmail.com',
      to: process.env.EMAIL_USER || 'avi996631@gmail.com', // Send to your email
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Message from Your Portfolio</h2>
        <p><strong>From:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message || 'Failed to send email' 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
