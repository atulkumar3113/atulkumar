import React from "react";
import "../../src/styles/navbar.css";
const Navbar = () => {
  return (
    <div className="links">
      <div className="text-right d-flex justify-content-md-end justify-content-center">
        <button>Home</button>
        <button>My Work</button>
        <button>About</button>
        <button>Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
