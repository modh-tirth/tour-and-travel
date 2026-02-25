import express from 'express';
import Payment from '../models/Payment.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const payment = new Payment(req.body);
    payment.transactionId = 'TXN' + Date.now();
    payment.status = 'completed';
    await payment.save();
    res.status(201).json({ message: 'Payment successful', data: payment });
  } catch (error) {
    res.status(500).json({ message: 'Payment failed', error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const payments = await Payment.find().sort({ createdAt: -1 });
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching payments', error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.json(payment);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching payment', error: error.message });
  }
});

export default router;
