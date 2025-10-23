const mongoose = require('mongoose');
require('dotenv').config();

// Import the Contact model
const Contact = require('../models/contact');

// MongoDB connection with better error handling for serverless
let isConnected = false;

const connectToDatabase = async () => {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false
    });
    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

module.exports = async function handler(req, res) {
  // Set comprehensive CORS headers
  const allowedOrigins = [
    'https://kvn147.github.io',
    'https://kevinn.me',
    'https://www.kevinn.me',
    'http://localhost:3000',
    'http://localhost:5173', // Vite dev server
    'http://127.0.0.1:5173',
    'http://localhost:5174'
  ];
  
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    // Fallback for GitHub Pages
    res.setHeader('Access-Control-Allow-Origin', 'https://kevinn.me');
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await connectToDatabase();
    
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'All fields are required' 
      });
    }

    // More detailed validation
    if (name.trim().length < 2) {
      return res.status(400).json({ 
        error: 'Name must be at least 2 characters long' 
      });
    }

    if (message.trim().length < 10) {
      return res.status(400).json({ 
        error: 'Message must be at least 10 characters long' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format' 
      });
    }

    // Create new contact document
    const newContact = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim()
    });

    // Save to database
    await newContact.save();

    console.log('New contact submission saved:', {
      name: newContact.name,
      email: newContact.email,
      timestamp: newContact.createdAt
    });

    res.status(200).json({
      message: 'Your message has been saved successfully! I will get back to you soon.',
      id: newContact._id
    });

  } catch (error) {
    console.error('Error saving contact submission:', error);
    
    // Handle specific MongoDB errors
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        error: 'Invalid data provided. Please check your input.' 
      });
    }
    
    if (error.name === 'MongoServerError' && error.code === 11000) {
      return res.status(400).json({ 
        error: 'This message has already been submitted.' 
      });
    }

    res.status(500).json({ 
      error: 'Failed to save your message. Please try again.'
    });
  }
}