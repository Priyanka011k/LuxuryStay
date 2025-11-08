import React, { Fragment } from "react";

function ContactUsPage() {
  return (
    <Fragment>
      <div className="container mt-4">
        <h2 className="text-center mb-4">Contact Us</h2>

        <div className="row">
          
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Our Office</h5>
                <p><strong>Address:</strong> 123 Main Street, Lucknow, Uttar Pradesh</p>
                <p><strong>Phone:</strong> +91 98765 43210</p>
                <p><strong>Email:</strong> restaurant@yourwebsite.com</p>
                <p><strong>Working Hours:</strong> Mon – Sat, 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Send us a message</h5>
                <form>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Your name" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="you@example.com" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" rows="4" placeholder="Your message here..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  );
}

export default ContactUsPage;
