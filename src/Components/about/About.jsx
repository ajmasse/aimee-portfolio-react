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
              <small>WordPress Developer @ Fellow</small>
            </article>
          </div>

          <p className="about__text">
            Hi, my name is Aimée and I currently reside in Regina, Saskatchewan.
            I graduated from BCIT's New Media Design and Web Development diploma
            program August, 2021. When I am not coding or designing, you can
            find me at the gym working out, travelling, singing, or playing
            video games.
          </p>
          <p className="about__text">
            Within the last year, I have learned so much working at Fellow.
            Throughout my time with the company, I utilized PHP, JavaScript,
            SASS, HTML, TypeScript, WordPress, and React daily. In my
            day-to-day, I was developing custom pages, Gutenberg blocks, and
            altering existing code. I had the great experience of being the
            marketing site's sole developer at Fellow. Because of this, my
            communication and organization skills greatly improved. It allowed
            me to build a solid foundation for my development process and
            enhanced my problem-solving skills.
          </p>
          <p className="about__text">
            I am currently looking for my next role and am open to any
            opportunities in front end! I look forward to my next new adventure,
            and can't wait to continue improving every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
