import React, { Fragment } from "react";
import Navbar from "../navigation/Navbar";
import { Outlet } from "react-router-dom";

function LandingPage() {
  return (
    <Fragment>
      <Navbar />

      
      <div className="container mt-4">
        <Outlet />
      </div>
    </Fragment>
  );
}

export default LandingPage;
