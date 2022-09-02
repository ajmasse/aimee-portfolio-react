import React from "react";
import "./about.css";

import { FaGraduationCap, FaCode } from "react-icons/fa";
import { BsFileEarmarkPerson } from "react-icons/bs";
import Portrait from "../../assets/aimee-portrait.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Portrait} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__header-content">
            <h5>Get to Know</h5>
            <h2>
              <span className="tag">&lt;h2&gt;</span> About Me{" "}
              <span className="tag">&lt;/h2&gt;</span>
            </h2>
          </div>
          <div className="about__cards">
            <article className="about__card">
              <FaCode className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>Education</h5>
              <small>New Media Design &amp; Web Dev Diploma</small>
            </article>
            <article className="about__card">
              <BsFileEarmarkPerson className="about__icon" />
              <h5>Previous Role</h5>
              <small>WordPress Developer</small>
            </article>
          </div>

          <p className="about__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisl
            purus, bibendum quis finibus in, vehicula ac neque. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nunc nisl purus, bibendum
            quis finibus in, vehicula ac neque. Interdum et malesuada fames ac
            ante ipsum primis in faucibus.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisl
            purus, bibendum quis finibus in, vehicula ac neque. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nunc nisl purus, bibendum
            quis finibus in, vehicula ac neque. Interdum et malesuada fames ac
            ante ipsum primis in faucibus.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisl
            purus, bibendum quis finibus in, vehicula ac neque. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
