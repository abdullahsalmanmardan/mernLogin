import React from "react";
import "./Navbar.css";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { userContext } from "../App";

const Navbar = () => {
  const { state, dispatch } = useContext(userContext);
  const UserLoggedIN = () => {
    if (state === false || state === null) {
      return (
        <>
          <li className="nav-item">
            <NavLink to="/signup" className="nav-link">
              Registration
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Login" className="nav-link">
              Login
            </NavLink>
          </li>
        </>
      );
    }
    if (state == true) {
      return (
        <>
          <li className="nav-item">
            <NavLink to="/Logout" className="nav-link">
              Logout
            </NavLink>
          </li>
        </>
      );
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <NavLink to="/home" className="nav-link">
          Login:SignUp
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to="/home" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <UserLoggedIN />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
