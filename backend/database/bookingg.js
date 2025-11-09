const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  guestName: String,
  roomId: String,
  date: String,
  duration: Number,
  status: { type: String, default: 'pending' }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
