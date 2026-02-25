import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import contactRoutes from './routes/contact.js';
import authRoutes from './routes/auth.js';
import bookingRoutes from './routes/booking.js';
import newsletterRoutes from './routes/newsletter.js';
import paymentRoutes from './routes/payment.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Tour & Travel API', status: 'running' });
});

app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/payment', paymentRoutes);

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
