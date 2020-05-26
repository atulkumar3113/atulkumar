import React from "react";
import "../../src/styles/footer.css";
const Footer = () => {
  return (
    <div className="footerLinks m-4">
      <div className="text-right d-flex justify-content-center">
        <button>
          <a
            href="https://www.facebook.com/kumar.atul.18400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook"></i>
          </a>
        </button>
        <button>
          <a
            href="https://www.instagram.com/Kumarak20/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram"></i>
          </a>
        </button>
        <button>
          <a
            href="https://dribbble.com/imAtul20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-dribbble"></i>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Footer;
