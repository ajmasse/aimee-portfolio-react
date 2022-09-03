import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <ul className="footer__permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; Aimée Massé 2022. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
