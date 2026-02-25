import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tourName: { type: String, required: true },
  destination: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: String,
  numberOfTravelers: { type: Number, required: true },
  totalPrice: Number,
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  customerPhone: { type: String, required: true },
  specialRequests: String,
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Booking', bookingSchema);
