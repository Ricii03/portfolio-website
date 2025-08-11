const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

// GET all skills
router.get('/', async (req, res) => {
  try {
    const { category, active = true } = req.query;
    
    let query = { isActive: active === 'true' };
    
    if (category) {
      query.category = category;
    }
    
    const skills = await Skill.find(query)
      .sort({ order: 1, name: 1 });
    
    res.json(skills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ message: 'Error fetching skills' });
  }
});

// GET skills by category
router.get('/category/:category', async (req, res) => {
  try {
    const skills = await Skill.find({ 
      category: req.params.category,
      isActive: true 
    }).sort({ order: 1, name: 1 });
    
    res.json(skills);
  } catch (error) {
    console.error('Error fetching skills by category:', error);
    res.status(500).json({ message: 'Error fetching skills by category' });
  }
});

// GET skill by ID
router.get('/:id', async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    
    res.json(skill);
  } catch (error) {
    console.error('Error fetching skill:', error);
    res.status(500).json({ message: 'Error fetching skill' });
  }
});

// POST new skill
router.post('/', async (req, res) => {
  try {
    const skill = new Skill(req.body);
    const savedSkill = await skill.save();
    
    res.status(201).json(savedSkill);
  } catch (error) {
    console.error('Error creating skill:', error);
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        message: 'Validation error', 
        errors: Object.values(error.errors).map(err => err.message) 
      });
    }
    
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Skill name already exists' });
    }
    
    res.status(500).json({ message: 'Error creating skill' });
  }
});

// PUT update skill
router.put('/:id', async (req, res) => {
  try {
    const updatedSkill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!updatedSkill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    
    res.json(updatedSkill);
  } catch (error) {
    console.error('Error updating skill:', error);
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        message: 'Validation error', 
        errors: Object.values(error.errors).map(err => err.message) 
      });
    }
    
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Skill name already exists' });
    }
    
    res.status(500).json({ message: 'Error updating skill' });
  }
});

// DELETE skill
router.delete('/:id', async (req, res) => {
  try {
    const deletedSkill = await Skill.findByIdAndDelete(req.params.id);
    
    if (!deletedSkill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    
    res.json({ message: 'Skill deleted successfully' });
  } catch (error) {
    console.error('Error deleting skill:', error);
    res.status(500).json({ message: 'Error deleting skill' });
  }
});

// PATCH toggle skill active status
router.patch('/:id/toggle', async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    
    skill.isActive = !skill.isActive;
    const updatedSkill = await skill.save();
    
    res.json(updatedSkill);
  } catch (error) {
    console.error('Error toggling skill status:', error);
    res.status(500).json({ message: 'Error toggling skill status' });
  }
});

module.exports = router;
