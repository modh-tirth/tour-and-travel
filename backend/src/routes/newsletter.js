import express from 'express';
import Newsletter from '../models/Newsletter.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { email } = req.body;
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }
    const newsletter = new Newsletter({ email });
    await newsletter.save();
    res.status(201).json({ message: 'Successfully subscribed to newsletter' });
  } catch (error) {
    res.status(500).json({ message: 'Error subscribing', error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const subscribers = await Newsletter.find().sort({ createdAt: -1 });
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching subscribers', error: error.message });
  }
});

export default router;
