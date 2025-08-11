const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ''
  },
  technologies: [{
    type: String,
    trim: true
  }],
  category: {
    type: String,
    required: true,
    enum: ['Web Development', 'Data Analysis', 'Machine Learning', 'Backend Development', 'Mobile Development', 'Design']
  },
  liveUrl: {
    type: String,
    default: ''
  },
  githubUrl: {
    type: String,
    default: ''
  },
  featured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['Completed', 'In Progress', 'Planning'],
    default: 'Completed'
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date
  }
}, {
  timestamps: true
});

// Index for better query performance
projectSchema.index({ category: 1, featured: 1 });
projectSchema.index({ order: 1 });

module.exports = mongoose.model('Project', projectSchema);
