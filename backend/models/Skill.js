const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  level: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  category: {
    type: String,
    required: true,
    enum: ['Frontend Development', 'Backend Development', 'Database & Tools', 'Data Analysis', 'Cloud & DevOps', 'Design & Tools']
  },
  color: {
    type: String,
    default: 'from-primary-500 to-blue-500'
  },
  icon: {
    type: String,
    default: 'Code'
  },
  order: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for better query performance
skillSchema.index({ category: 1, order: 1 });
skillSchema.index({ isActive: 1 });

module.exports = mongoose.model('Skill', skillSchema);
