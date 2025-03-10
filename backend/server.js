const express = require("express");
const connectDB = require("./config/db");
const bookings = require("./routes/bookings");
const cors = require("cors");

const app = express();
connectDB();

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use("/api",bookings); // Prefix all routes with '/api'

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
