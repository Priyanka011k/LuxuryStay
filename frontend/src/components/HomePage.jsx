import React, { Fragment } from 'react';
import Navbar from '../navigation/Navbar';
import SliderPage from './SliderPage';
import Booking from './Booking';
import RoomDetailsModal from './RoomDetailsModal';
import LoginPage from './LoginPage';

const HomePage = () => {
  return (
    <Fragment>
      {/* <Navbar /> */}
      <SliderPage />
      {/* <LoginPage /> */}

      
      <div className="container mt-5">
        <div className="row text-center mb-4">
          <h2 className="fw-bold">🏨 Our Rooms & Dining</h2>
          <p className="text-muted">Relax, recharge, and dine in style — curated for your comfort and cravings.</p>
        </div>

        <div className="row">
          
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="https://cache.marriott.com/content/dam/marriott-renditions/DELDM/deldm-king-guestroom-7028-hor-clsc.jpg" className="card-img-top" alt="Guest Room" />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">Deluxe Guest Room</h5>
                <p className="card-text">Explore elegant guest rooms designed with comfort, luxury, and convenience in mind.</p>
                <div className="mt-3 d-flex justify-content-between">
                   <button
                       className="btn btn-outline-primary btn-sm"
                       data-bs-toggle="modal"
                       data-bs-target="#deluxeModal"
                       >
                        View Details
                    </button>
                  <button className="btn btn-dark btn-sm" onClick={() => document.getElementById('booking-section').scrollIntoView({ behavior: 'smooth' })}>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>

         
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="https://cache.marriott.com/content/dam/marriott-renditions/DELDM/deldm-twin-guest-6106-hor-clsc.jpg" className="card-img-top" alt="Twin Room" />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">Twin Guest Room</h5>
                <p className="card-text">Comfortable and stylish, perfect for family and group stays near the city center.</p>
                <div className="mt-3 d-flex justify-content-between">
                   <button
                       className="btn btn-outline-primary btn-sm"
                       data-bs-toggle="modal"
                       data-bs-target="#twinModal"
                       >
                        View Details
                    </button>
                  <button className="btn btn-dark btn-sm" onClick={() => document.getElementById('booking-section').scrollIntoView({ behavior: 'smooth' })}>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="https://cache.marriott.com/content/dam/marriott-renditions/DELDM/deldm-king-guestroom-7034-hor-clsc.jpg" className="card-img-top" alt="Luxury Dining" />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">Luxury Dining</h5>
                <p className="card-text">Savor gourmet dishes prepared by expert chefs in a tranquil, intimate setting.</p>
                <div className="mt-3 d-flex justify-content-between">
                   <button
                       className="btn btn-outline-primary btn-sm"
                       data-bs-toggle="modal"
                       data-bs-target="#diningModal"
                       >
                        View Details
                    </button>
                  <button className="btn btn-dark btn-sm" onClick={() => document.getElementById('booking-section').scrollIntoView({ behavior: 'smooth' })}>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
               <RoomDetailsModal
                   id="deluxeModal"
                   title="Deluxe Guest Room"
                   description="Elegant guest room with king-sized bed, city view, and modern design."
                   price={4500}
                   amenities={['Free Wi-Fi', 'Room Service', 'Smart TV', 'Mini Fridge']}
                />

                <RoomDetailsModal
                   id="twinModal"
                   title="Twin Guest Room"
                   description="Spacious twin-bedded room perfect for families or friends."
                   price={4000}
                   amenities={['Air Conditioning', 'Room Service', 'Wardrobe', 'LED TV']}
                />

                <RoomDetailsModal
                   id="diningModal"
                   title="Luxury Dining"
                   description="Fine dining experience with gourmet meals and elegant ambiance."
                   price={1200}
                   amenities={['Buffet Available', 'Vegetarian & Non-Vegetarian', 'Private Tables']}
                />



     
      <Booking />

      
      <div className="container mt-5 bg-light rounded p-4 shadow-sm">
        <h2 className="text-center mb-4">💬 What Guests Say</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <p className="fst-italic">“5 stars for the service and room quality!”</p>
            <small>- Priya Sharma</small>
          </div>
          <div className="col-md-4">
            <p className="fst-italic">“Food was delicious and delivered piping hot.”</p>
            <small>- Tanmay Roy</small>
          </div>
          <div className="col-md-4">
            <p className="fst-italic">“Perfect location, beautiful ambiance!”</p>
            <small>- Avni Mehta</small>
          </div>
        </div>
      </div>

      
      <div className="container mt-5 text-center">
        <h3 className="fw-bold">📞 Contact & Reservations</h3>
        <p>Call us at +91-9876543210 or book online to experience the comfort and taste of our place.</p>
        <button className="btn btn-dark">Reserve a Table</button>
      </div>

      
      <footer className="text-center py-4 mt-5 border-top">
        <p className="text-muted mb-0">© 2025 SpiceStay. Designed with 🧡 in Lucknow.</p>
      </footer>
    </Fragment>
  );
};

export default HomePage;
