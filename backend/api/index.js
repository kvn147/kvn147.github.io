const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

// Import the Contact model
const Contact = require('../models/contact');

const app = express();

// Middleware
app.use(cors({
  origin: [
    'https://kvn147.github.io',
    'http://localhost:3000',
    'http://localhost:5173'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS']
}));
app.use(express.json());

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
      bufferCommands: false,
      bufferMaxEntries: 0
    });
    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

// Apply rate limiting to the contact endpoint
app.use('/api/contact', limiter);

// Contact form endpoint - Save to MongoDB
app.post('/api/contact', async (req, res) => {
  try {
    await connectToDatabase();
    
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
    res.status(500).json({ 
      error: 'Failed to save your message. Please try again.'
    });
  }
});

// Get all contacts (admin endpoint)
app.get('/api/contacts', async (req, res) => {
  try {
    await connectToDatabase();
    
    const contacts = await Contact.find()
      .sort({ createdAt: -1 }) // Sort by newest first
      .limit(100); // Limit to last 100 contacts

    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ 
      error: 'Failed to fetch contacts' 
    });
  }
});

// Mark contact as read
app.patch('/api/contacts/:id/read', async (req, res) => {
  try {
    await connectToDatabase();
    
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.status(200).json(contact);
  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({ 
      error: 'Failed to update contact' 
    });
  }
});

// Health check endpoint
app.get('/api/health', async (req, res) => {
  try {
    await connectToDatabase();
    res.status(200).json({ 
      status: 'Server is running!',
      database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'Server error',
      database: 'Disconnected',
      error: error.message
    });
  }
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend API is running!' });
});

// Handle 404
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

module.exports = app;
