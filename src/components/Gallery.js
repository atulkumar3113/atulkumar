import React, { useState } from "react";
import "../styles/work.css";
import freelance from "../assets/images/recent/freelance.jpg";
import img1 from "../assets/images/recent/img1.jpg";
import img3 from "../assets/images/recent/img3.png";
import man from "../assets/images/recent/man.jpg";
// gallery images
import doggo from "../assets/images/gallery/doggo.jpg";
import img2 from "../assets/images/gallery/img2.jpg";
import mj from "../assets/images/gallery/mj.png";

const Gallery = () => {
  const [ImgSource] = useState([freelance, img1, img3, man, doggo, img2, mj]);
  return (
    <div id="work" className="recentWork">
      <h6 className="mt-4">My Works</h6>
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

export default Gallery;
