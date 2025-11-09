import React from "react";
import { Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold mb-4">👩‍💼 Admin Dashboard</h2>
      <p className="text-muted text-center">
        Welcome, Admin! Manage rooms, bookings, and users from here.
      </p>

      <div className="row mt-4">
        {/* 📖 Manage Bookings */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h5>Manage Bookings</h5>
            <p>View and update guest bookings.</p>
            <Link to="/admin/bookings" className="btn btn-outline-primary btn-sm">
              View Bookings
            </Link>
          </div>
        </div>

        {/* 🏨 Manage Rooms */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h5>Manage Rooms</h5>
            <p>Edit room availability, pricing, and details.</p>
            <Link to="/admin/rooms/view" className="btn btn-outline-secondary btn-sm">
              Edit Rooms
            </Link>
          </div>
        </div>

        {/* 👥 Registered Users */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h5>Registered Users</h5>
            <p>Track registered guest data and logins.</p>
            <Link to="/admin/users" className="btn btn-outline-success btn-sm">
              View Users
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
