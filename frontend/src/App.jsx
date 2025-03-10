import React from "react";
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Service Booking</h1>
      <BookingForm />
      <BookingList />
    </div>
  );
}

export default App;
