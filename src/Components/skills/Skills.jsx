import React from "react";
import "./skills.css";

import htmlLogo from "../../assets/html.png";
import cssLogo from "../../assets/css.png";
import sassLogo from "../../assets/sass.png";
import javascriptLogo from "../../assets/javascript.png";
import phpLogo from "../../assets/php.png";
import wordpressLogo from "../../assets/wordpress.png";
import reactLogo from "../../assets/react.png";
import typescriptLogo from "../../assets/typescript.png";
import githubLogo from "../../assets/github.png";
import gitLogo from "../../assets/git.png";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills__content">
        <div className="skills__header-content">
          <h5>Technologies</h5>
          <h2>
            <span className="tag">&lt;h2&gt;</span> Development{" "}
            <span className="tag">&lt;/h2&gt;</span>
          </h2>
        </div>

        <div className="container skills__container">
          <div className="html skills__item">
            <img src={htmlLogo} alt="" />
          </div>
          <div className="css skills__item">
            <img src={cssLogo} alt="" />
          </div>
          <div className="sass skills__item">
            <img src={sassLogo} alt="" />
          </div>
          <div className="javascript skills__item">
            <img src={javascriptLogo} alt="" />
          </div>
          <div className="php skills__item">
            <img src={phpLogo} alt="" />
          </div>
          <div className="wordpress skills__item">
            <img src={wordpressLogo} alt="" />
          </div>
          <div className="skills__item react">
            <img src={reactLogo} alt="" />
          </div>
          <div className="skills__item typescript">
            <img src={typescriptLogo} alt="" />
          </div>
          <div className="skills__item github">
            <img src={githubLogo} alt="" />
          </div>
          <div className="skills__item git">
            <img src={gitLogo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
