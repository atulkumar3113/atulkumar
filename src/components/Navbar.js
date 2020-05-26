import React from "react";
import { NavLink } from "react-router-dom";
import "../../src/styles/navbar.css";
const Navbar = () => {
  return (
    <div className="links">
      <div className="text-right d-flex justify-content-md-end justify-content-center">
        <button>
          <NavLink to="/">Home</NavLink>
        </button>
        <button>
          <NavLink to="/work">My Work</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
