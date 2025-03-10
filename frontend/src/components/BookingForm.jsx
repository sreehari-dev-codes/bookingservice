import { useState } from "react";
import axios from "axios";
const BookingForm = () => {
  const [value, setvalues] = useState({
    userName: "",
    userEmail: "",
    service: "",
    bookingDate: "",
  });
  const onchangeform = event => {
    const { name, value } = event.target;
    setvalues(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/book",
        value
      );
      console.log("Booking successful", response.data);
      // Reset form after successful submission
      setvalues({
        userName: "",
        userEmail: "",
        service: "",
        bookingDate: "",
      });
    } catch (error) {
      console.error("Error submitting booking", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={value.userName}
        name="userName"
        onChange={onchangeform}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={value.userEmail}
        name="userEmail"
        onChange={onchangeform}
        required
      />
      <select
        value={value.service}
        onChange={onchangeform}
        required
        name="service"
      >
        <option value="">Select Service</option>
        <option value="Service 1">Service 1</option>
        <option value="Service 2">Service 2</option>
        <option value="Service 3">Service 3</option>
      </select>
      <input
        type="date"
        value={value.bookingDate}
        name="bookingDate"
        onChange={onchangeform}
        required
      />
      <button type="submit">Submit Booking</button>
    </form>
  );
};
export default BookingForm;
