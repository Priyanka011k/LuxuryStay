// import React from "react";

// const BookingsPage = () => {
//   return (
//     <div className="container mt-5">
//       <h2 className="text-center fw-bold mb-4">📚 Guest Bookings</h2>
//       <p className="text-muted text-center">Here you'll find all current bookings and their statuses.</p>

//       <div className="alert alert-info text-center">
//         Booking details and management tools will appear here.
//       </div>
//     </div>
//   );
// };

// export default BookingsPage;
import React from "react";

const BookingsPage = () => {
  const bookings = [
    { id: 1, guest: "Aarav Singh", room: "Deluxe", date: "2025-07-20" },
    { id: 2, guest: "Meera Sharma", room: "Suite", date: "2025-07-21" },
    { id: 3, guest: "Ravi Kumar", room: "Standard", date: "2025-07-22" },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold mb-4">📚 Guest Bookings</h2>
      <p className="text-muted text-center">Here's a snapshot of recent guest reservations.</p>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Guest Name</th>
            <th>Room Type</th>
            <th>Booking Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.guest}</td>
              <td>{booking.room}</td>
              <td>{booking.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsPage;
