const express = require("express");
const Booking = require("../models/Booking");
const router = express.Router();

router.post("/book", async (req, res) => {
  try {
    const { userName, userEmail, service, bookingDate } = req.body;

    if (!userName || !userEmail || !service || !bookingDate) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newService = await Booking.create({
      userName,
      userEmail,
      service,
      bookingDate,
    });

    if(newService){
      return res.status(201).json({message:"succuFully savede",data:newService})
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/services", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).send(bookings);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
