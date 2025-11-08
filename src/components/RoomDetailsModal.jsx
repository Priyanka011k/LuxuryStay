import React from 'react';

const RoomDetailsModal = ({ id, title, description, price, amenities }) => {
  return (
    <div className="modal fade" id={id} tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${id}Label`}>{title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{description}</p>
            <p><strong>Price:</strong> ₹{price} per night</p>
            <p><strong>Amenities:</strong></p>
            <ul>
              {amenities.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={() => document.getElementById('booking-section').scrollIntoView({ behavior: 'smooth' })}>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsModal;
