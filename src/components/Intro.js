import React from "react";
import "../../src/styles/intro.css";
import img from "../../src/assets/images/img.png";
const Intro = () => {
  return (
    <div className="row intro">
      <div className="col-md-3 text-center">
        <div>
          <div className="img-wrapper">
            <img src={img} alt="" />
          </div>
          <div className="mt-3">
            <h4>Atul Kumar</h4>
            <p className="mb-1">Graphic Designer</p>
            <p style={{ fontSize: "0.9rem" }}>atulkumar3113@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="col-md-5 d-flex align-items-end">
        <div className="details">
          <h1>Hi,</h1>
          <p>
            Welcome Lorem ipsum, or lipsum as it is sometimes known, is dummy
            text used in laying out print, graphic or web designs. The passage
            is attributed to an unknown.
          </p>
          <p>
            lipsum as it is sometimes known, is dummy text used in laying out
            print, graphic or web designs. The passage is attributed to an
            unknown
          </p>
        </div>
      </div>
      <div className="col-md-4 d-flex align-items-end">
        <p>
          lipsum as it is sometimes known, is dummy text used in laying out
          print, graphic or web designs. The passage is attributed to an unknown
        </p>
      </div>
    </div>
  );
};

export default Intro;
