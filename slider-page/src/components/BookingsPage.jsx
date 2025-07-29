import React, { useEffect, useState } from "react";

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/bookings");
        const data = await res.json();

        console.log("Fetched bookings:", data);

        if (Array.isArray(data)) {
          setBookings(data);
        } else {
          setError("Received unexpected data format from server.");
        }
      } catch (err) {
        console.error("Booking fetch failed:", err);
        setError("Failed to load bookings from the server.");
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold mb-4">📚 Guest Bookings</h2>
      <p className="text-muted text-center">
        Here's a snapshot of recent guest reservations.
      </p>

      {error ? (
        <div className="alert alert-danger text-center">{error}</div>
      ) : bookings.length === 0 ? (
        <div className="alert alert-info text-center">
          No bookings found. Try adding a new reservation.
        </div>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Guest Name</th>
              <th>Room ID</th>
              <th>Date</th>
              <th>Duration</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.guestName}</td>
                <td>{booking.roomId}</td>
                <td>{booking.date}</td>
                <td>{booking.duration}</td>
                <td>{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookingsPage;
