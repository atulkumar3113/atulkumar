import React, { useState } from "react";
import img from "../assets/images/img.png";
import "../styles/work.css";

const RecentWork = () => {
  const [ImgSource] = useState([
    img,
    "http://placekitten.com/320/221",
    "http://placekitten.com/320/222",
    "http://placekitten.com/320/220",
    "http://placekitten.com/320/221",
    "http://placekitten.com/320/222",
    "http://placekitten.com/320/220",
    "http://placekitten.com/320/221",
    "http://placekitten.com/320/222",
  ]);
  return (
    <div id="work" className="recentWork">
      <h6>Recent Works</h6>
      <div className="gridLayout">
        {ImgSource.map((item, index) => (
          <div className="img-wrapper" key={index}>
            <img src={item} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentWork;
