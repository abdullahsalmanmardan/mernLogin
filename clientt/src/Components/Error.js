import React from "react";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container align-items-center">
        <div className="row">
          <div className="col-md-12 d-flex  justify-content-center">
            <h1>WE ARE SORRY, PAGE DOESN'T FOUND</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 h-100 d-flex align-items-center justify-content-center">
            <h6>
              The page you are looking for has been removed or temporary
              unavaliable.
            </h6>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          <NavLink to="/" className="backtoHome">
            Back to Home
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Error;
