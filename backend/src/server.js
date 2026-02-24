import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import tourRoutes from './routes/tours.js';
import bookingRoutes from './routes/bookings.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tours', tourRoutes);
app.use('/api/bookings', bookingRoutes);

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
