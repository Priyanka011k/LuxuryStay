import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ViewRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data))
      .catch((err) => console.error("Error fetching rooms:", err));
  }, []);

  const totalRooms = rooms.length;
  const availableRooms = rooms.filter(room => room.availability === "available").length;
  const unavailableRooms = rooms.filter(room => room.availability === "unavailable").length;

  return (
    <div className="container mt-4">
      <h2>Rooms Overview</h2>

      {/* 🔢 Quick Stats */}
      <div className="row text-center mb-4">
        <div className="col">
          <div className="card bg-light p-3">
            <h5>Total Rooms</h5>
            <p>{totalRooms}</p>
          </div>
        </div>
        <div className="col">
          <div className="card bg-light p-3">
            <h5>Available</h5>
            <p>{availableRooms}</p>
          </div>
        </div>
        <div className="col">
          <div className="card bg-light p-3">
            <h5>Unavailable</h5>
            <p>{unavailableRooms}</p>
          </div>
        </div>
      </div>

      {/* 🛠️ Top Actions */}
      <div className="mb-4">
        <Link to="/admin/rooms/add" className="btn btn-success me-2">➕ Add Room</Link>
        <Link to="/admin/rooms" className="btn btn-secondary">🛠 Manage Overview</Link>
      </div>

      {/* 📋 Room Table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Room Name</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room._id}>
              <td>{room.name}</td>
              <td>₹{room.price}</td>
              <td>{room.availability}</td>
              <td>
                <Link to={`/admin/rooms/edit/${room._id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewRooms;
