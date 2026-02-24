import express from 'express';
import { tours } from '../models/data.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(tours);
});

router.get('/:id', (req, res) => {
  const tour = tours.find(t => t.id === parseInt(req.params.id));
  if (!tour) {
    return res.status(404).json({ message: 'Tour not found' });
  }
  res.json(tour);
});

export default router;
