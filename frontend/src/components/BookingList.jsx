import React, { useEffect, useState } from "react";
import axios from "axios";

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/services"); // API call
        console.log(response.data, "kkk");
        setBookings(response.data); // Set the state with fetched data
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
        setBookings([]); // Set to an empty array on error
      }
    };

    fetchBookings();
  }, []); // Empty dependency array ensures it runs only on mount

  return (
    <div>
      <h2>Booking List</h2>
      <ul>
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <li key={index}>
              {booking.userName} - {booking.service} on{" "}
              {new Date(booking.bookingDate).toLocaleDateString()}
            </li>
          ))
        ) : (
          <li>No bookings available.</li>
        )}
      </ul>
    </div>
  );
}

export default BookingList;
