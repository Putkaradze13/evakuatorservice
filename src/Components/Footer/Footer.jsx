import React from "react";

import { BsLinkedin, BsTruckFlatbed } from "react-icons/bs";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        <BsTruckFlatbed className="footer-truck-icon" />
        ევაკუატორით მომსახურება
      </p>
      <p className="created-by">
        &copy; Created By
        <a
          className="author"
          href="https://www.linkedin.com/in/tengiz-putkaradze-83a745239/"
          target="_blank"
          rel="noreferrer"
        >
          Tengiz Putkaradze <BsLinkedin className="footer-linkedin-icon" />
        </a>
      </p>
    </div>
  );
}
