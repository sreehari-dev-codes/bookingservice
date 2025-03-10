const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  service: { type: String, required: true },
  bookingDate: { type: Date, required: true },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
