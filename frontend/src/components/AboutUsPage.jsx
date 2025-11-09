import React from "react";

function AboutUsPage() {
  return (
    <div className="container mt-5">
      
      <div className="text-center mb-5">
        <h2 className="fw-bold display-6">🍽️ About Us</h2>
        <p className="lead text-muted">
          Discover our story, mission, vision, and services — crafted for food lovers and travelers alike.
        </p>
      </div>

      
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h4 className="fw-semibold">👨‍🍳 Who We Are</h4>
          <p>
            We're a passionate team of foodies and techies redefining how India eats and connects. Our platform simplifies food discovery, ordering, and now—staying over.
          </p>
          <p>
            From street-side bites to fine dining, we bring it all together with speed, security, and heart.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="https://cdn.prod.website-files.com/63d06722a6f6c82db2e3292f/65eaff428a100224d13b0496_AdobeStock_177383025.jpeg"
            className="img-fluid rounded-4 shadow-lg about-img"
            alt="Meet the Team"
          />
        </div>
      </div>

      
      <div className="row align-items-center mb-5">
        <div className="col-md-6 text-center">
          <img
            src="https://d25wybtmjgh8lz.cloudfront.net/sites/default/files/2024-01/Deluxe%20Room%20with%20view.jpeg"
            className="img-fluid rounded-4 shadow-lg about-img"
            alt="Guest Room"
          />
        </div>
        <div className="col-md-6">
          <h4 className="fw-semibold">🛏️ Our Guest Rooms</h4>
          <p>
            We offer cozy, comfortable, and beautifully designed guest rooms for travelers seeking more than just a meal. Whether you're visiting for business or pleasure, our rooms provide a home away from home.
          </p>
          <p>
            Enjoy premium amenities, local hospitality, and seamless food delivery right to your room—because great stays deserve great flavors.
          </p>
        </div>
      </div>

     
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">🔭 Our Vision</h5>
              <p className="card-text">
                To be India’s most beloved food and stay platform—connecting people across taste, tech, and travel.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">🚀 Our Mission</h5>
              <p className="card-text">
                To empower guests and food lovers with options, elevate local eateries and hosts, and make every experience seamless and memorable.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="text-center mt-5">
        <p className="text-muted">Made with ❤️ for flavor-seekers and explorers across India.</p>
      </div>
    </div>
  );
}

export default AboutUsPage;
