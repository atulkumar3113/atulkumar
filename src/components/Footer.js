import React from "react";
import "../../src/styles/footer.css";
const Footer = () => {
  return (
    <div className="footerLinks m-4">
      <div className="text-right d-flex justify-content-center">
        <button>
          <a href="/d">
            <i className="fa fa-facebook"></i>
          </a>
        </button>
        <button>
          <a href="/sdf">
            <i className="fa fa-instagram"></i>
          </a>
        </button>
        <button>
          <a href="/sb">
            <i className="fa fa-dribbble"></i>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Footer;
