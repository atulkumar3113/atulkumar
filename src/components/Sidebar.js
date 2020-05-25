import React from "react";
import "../styles/sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidenav">
      <div className="user-info">
        <div className="user-img">
          <img src="http://placekitten.com/320/220" alt="" />
        </div>
        <p>Atul Kumar</p>
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
