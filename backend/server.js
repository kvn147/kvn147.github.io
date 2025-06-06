const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

// Apply rate limiting to the contact endpoint
app.use('/api/contact', limiter);

// Create nodemailer transporter - fixed function name
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PWD // Updated to match .env variable name
    }
  });
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      error: 'All fields are required' 
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      error: 'Invalid email format' 
    });
  }

  try {
    const transporter = createTransporter();

    // Email options - sending to yourself
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your email to receive messages
      subject: `Portfolio Contact Form: Message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>This message was sent from your portfolio contact form.</small></p>
      `,
      replyTo: email // This allows you to reply directly to the sender
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Send confirmation email to the sender
    const confirmationOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <h3>Thank you for your message!</h3>
        <p>Hi ${name},</p>
        <p>Thank you for reaching out through my portfolio. I've received your message and will get back to you as soon as possible.</p>
        <p><strong>Your message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p>Best regards,<br>Kevin Nguyen</p>
      `
    };

    await transporter.sendMail(confirmationOptions);

    res.status(200).json({ 
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      error: 'Failed to send email' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Server is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});