import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = () => {
    
  //   setIsLoggedIn(true);
  // };

  const handleLogout = () => {
    
    setIsLoggedIn(false);
  };

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg bg-light shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">Navbar</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
            
           
            <div className="navbar-nav">
              <Link className="nav-link active" to="/">Home</Link>
              <Link className="nav-link" to="/about">About Us</Link>
              <Link className="nav-link" to="/contact">Contact Us</Link>
              <Link className="nav-link" to="/register">Register</Link>
              {/* <Link className="nav-link" to="/api">ApiPage</Link> */}
            </div>

            
            <div className="d-flex align-items-center">
              <Link className="nav-link text-danger fw-semibold me-3" to="/admin">Admin</Link>
              {
                isLoggedIn ? (
                  <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>Logout</button>
                ) : (
                  <Link to="/login" className="btn btn-outline-success btn-sm">Login</Link>

                )
              }
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
