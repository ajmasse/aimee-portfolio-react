import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/aimee-masse/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/ajmasse" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
