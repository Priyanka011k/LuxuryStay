import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const RoomEditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState({
    name: "",
    price: "",
    availability: "available",
    description: "",
    type: "standard",
    amenities: "",
  });

  useEffect(() => {
    fetch(`http://localhost:5000/api/rooms/${id}`)
      .then(res => res.json())
      .then(data => setRoom(data))
      .catch(err => console.error("Error fetching room:", err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoom(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/rooms/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(room),
    })
      .then(res => {
        if (res.ok) {
          alert("Room updated successfully!");
          navigate("/admin/rooms");
        } else {
          alert("Update failed.");
        }
      })
      .catch(err => console.error("Update error:", err));
  };

  return (
    <div className="container mt-4">
      <h3>Edit Room Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">Room Name</label>
          <input
            type="text"
            name="name"
            value={room.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            value={room.price}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="availability">Availability</label>
          <select
            name="availability"
            value={room.availability}
            onChange={handleChange}
            className="form-select"
          >
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="type">Room Type</label>
          <select
            name="type"
            value={room.type}
            onChange={handleChange}
            className="form-select"
          >
            <option value="standard">Standard</option>
            <option value="deluxe">Deluxe</option>
            <option value="suite">Suite</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            value={room.description}
            onChange={handleChange}
            className="form-control"
            rows="3"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="amenities">Amenities (comma separated)</label>
          <input
            type="text"
            name="amenities"
            value={room.amenities}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-success">Update Room</button>
      </form>
    </div>
  );
};

export default RoomEditForm;
