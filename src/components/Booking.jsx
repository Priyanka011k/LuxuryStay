import React from 'react';

const Booking = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking submitted successfully!');
    // You can add form validation, API call, or localStorage logic here
  };

  return (
    <div className="container mt-5" id="booking-section">
      <h2 className="text-center mb-4">🛎️ Book Your Stay</h2>
      <form className="row g-3 bg-light p-4 rounded shadow-sm" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="fullName" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" required />
        </div>

        <div className="col-md-6">
          <label htmlFor="checkIn" className="form-label">Check-in Date</label>
          <input type="date" className="form-control" id="checkIn" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="checkOut" className="form-label">Check-out Date</label>
          <input type="date" className="form-control" id="checkOut" required />
        </div>

        <div className="col-md-6">
          <label htmlFor="roomType" className="form-label">Room Type</label>
          <select className="form-select" id="roomType" required>
            <option value="">Choose...</option>
            <option value="deluxe">Deluxe Guest Room</option>
            <option value="twin">Twin Guest Room</option>
            <option value="suite">Luxury Suite</option>
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="guests" className="form-label">Number of Guests</label>
          <input type="number" className="form-control" id="guests" min="1" max="10" required />
        </div>

        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary px-4">Confirm Booking</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
