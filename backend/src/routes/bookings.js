import express from 'express';
import { bookings, tours } from '../models/data.js';

const router = express.Router();

router.post('/', (req, res) => {
  const { tourId, userId, date, guests } = req.body;
  
  const tour = tours.find(t => t.id === parseInt(tourId));
  if (!tour) {
    return res.status(404).json({ message: 'Tour not found' });
  }

  const booking = {
    id: bookings.length + 1,
    tourId,
    userId,
    date,
    guests,
    status: 'confirmed',
    createdAt: new Date()
  };
  
  bookings.push(booking);
  res.json({ message: 'Booking successful', booking });
});

router.get('/user/:userId', (req, res) => {
  const userBookings = bookings.filter(b => b.userId === parseInt(req.params.userId));
  res.json(userBookings);
});

export default router;
