import React from "react";
import "./header.css";
import CTA from "./CTA";
import Illustration from "../../assets/aimee-illustration.png";
import HeaderSocials from "./HeaderSocials";
import Logo from "../../assets/aimee_logo.png";

const Header = () => {
  return (
    <header>
      <img className="aimee_logo" src={Logo} alt="" />
      <div className="container header__container vertical-center ">
        <div className="header__content">
          <h5 className="tag">&lt;header&gt;</h5>
          <h5 className="tag indent">&lt;h1&gt;</h5>
          <h1>
            Hi, my name <br /> is
            <span className="color-primary"> Aimée Massé</span>
            <span className="tag"> &lt;/h1&gt;</span>
          </h1>
          <div className="typewriter">
            <p className="indent">
              <span className="tag">&lt;p&gt; </span>Front End Developer &amp;
              Designer
              <span className="tag"> &lt;/p&gt;</span>
            </p>
          </div>
          <CTA />
          <h5 className="tag">&lt;/header&gt;</h5>
        </div>
        <div className="header__aimee-img">
          <img src={Illustration} alt="" />
        </div>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
