const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// GET all contact messages (admin only)
router.get('/', async (req, res) => {
  try {
    const { status, limit = 50, page = 1 } = req.query;
    
    let query = {};
    
    if (status) {
      query.status = status;
    }
    
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const messages = await Contact.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));
    
    const total = await Contact.countDocuments(query);
    
    res.json({
      messages,
      pagination: {
        current: parseInt(page),
        total: Math.ceil(total / parseInt(limit)),
        hasNext: skip + messages.length < total,
        hasPrev: parseInt(page) > 1
      }
    });
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    res.status(500).json({ message: 'Error fetching contact messages' });
  }
});

// POST new contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        message: 'All fields are required' 
      });
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        message: 'Invalid email format' 
      });
    }
    
    // Create contact message
    const contact = new Contact({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      subject: subject.trim(),
      message: message.trim(),
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent')
    });
    
    const savedContact = await contact.save();
    
    // Here you could add email notification logic
    // await sendNotificationEmail(savedContact);
    
    res.status(201).json({
      message: 'Message sent successfully!',
      id: savedContact._id
    });
    
  } catch (error) {
    console.error('Error creating contact message:', error);
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        message: 'Validation error', 
        errors: Object.values(error.errors).map(err => err.message) 
      });
    }
    
    res.status(500).json({ message: 'Error sending message' });
  }
});

// GET contact message by ID
router.get('/:id', async (req, res) => {
  try {
    const message = await Contact.findById(req.params.id);
    
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    
    res.json(message);
  } catch (error) {
    console.error('Error fetching contact message:', error);
    res.status(500).json({ message: 'Error fetching contact message' });
  }
});

// PATCH update message status
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!status || !['New', 'Read', 'Replied', 'Archived'].includes(status)) {
      return res.status(400).json({ 
        message: 'Invalid status. Must be one of: New, Read, Replied, Archived' 
      });
    }
    
    const updatedMessage = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    
    if (!updatedMessage) {
      return res.status(404).json({ message: 'Message not found' });
    }
    
    res.json(updatedMessage);
  } catch (error) {
    console.error('Error updating message status:', error);
    res.status(500).json({ message: 'Error updating message status' });
  }
});

// PATCH mark message as spam
router.patch('/:id/spam', async (req, res) => {
  try {
    const { isSpam } = req.body;
    
    if (typeof isSpam !== 'boolean') {
      return res.status(400).json({ 
        message: 'isSpam must be a boolean value' 
      });
    }
    
    const updatedMessage = await Contact.findByIdAndUpdate(
      req.params.id,
      { isSpam },
      { new: true }
    );
    
    if (!updatedMessage) {
      return res.status(404).json({ message: 'Message not found' });
    }
    
    res.json(updatedMessage);
  } catch (error) {
    console.error('Error updating spam status:', error);
    res.status(500).json({ message: 'Error updating spam status' });
  }
});

// DELETE contact message
router.delete('/:id', async (req, res) => {
  try {
    const deletedMessage = await Contact.findByIdAndDelete(req.params.id);
    
    if (!deletedMessage) {
      return res.status(404).json({ message: 'Message not found' });
    }
    
    res.json({ message: 'Message deleted successfully' });
  } catch (error) {
    console.error('Error deleting contact message:', error);
    res.status(500).json({ message: 'Error deleting contact message' });
  }
});

module.exports = router;
