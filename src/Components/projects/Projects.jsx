import React from "react";
import "./projects.css";

import Proj1 from "../../assets/meeting-cost-calculator.jpg";
import Proj2 from "../../assets/integrations.jpg";
import Proj3 from "../../assets/case-study.jpg";
import Proj4 from "../../assets/comparison-table.jpg";
import Proj5 from "../../assets/trivia.jpg";
import Proj6 from "../../assets/spothot-design.jpg";

const data = [
  {
    id: 1,
    image: Proj1,
    title: "Meeting Cost Calculator",
    description:
      "A meeting cost calculator tool for users to understand how much money they are spending daily, weekly, annually. *Owned by Fellow*",
    view: "https://fellow.app/tools/meeting-cost-calculator/",
    // more: "",
  },
  {
    id: 2,
    image: Proj2,
    title: "Integrations Page",
    description:
      "A custom coded WordPress archive and taxonomy page used to display the integrations all included with Fellow. *Owned by Fellow*",
    view: "https://fellow.app/integrations/",
    // more: "",
  },
  {
    id: 3,
    image: Proj3,
    title: "Case Study Page",
    description:
      "A custom coded WordPress archive and taxonomy page used to display Fellow's customer case studies. *Owned by Fellow*",
    view: "https://fellow.app/customers/",
    // more: "",
  },
  {
    id: 4,
    image: Proj4,
    title: "Comparison Table Block",
    description:
      "A Gutenberg block created for reusability through comparison pages. Developed utilizing JavaScript, React, and Sass. *Owned by Fellow*",
    view: "https://fellow.app/compare/fellow-vs-google-docs/",
    // more: "",
  },
  {
    id: 4,
    image: Proj5,
    title: "Trivia",
    description:
      "A trivia web application coded utilizing JavaScript, HTML, and CSS.",
    view: "http://trivia.aimeemasse.ca/triviagame.html",
    // more: "",
  },
  {
    id: 6,
    image: Proj6,
    title: "Spothot Site Design",
    description:
      "The Figma design for Spothot's marketing site - No live preview as company has since shut down.",
    view: "https://www.figma.com/file/E3IfOZQrwxiCinMOFMyNTN/Spothot?node-id=0%3A1",
    // more: "",
  },
];

export const Projects = () => {
  return (
    <section id="projects">
      <div className="projects__header">
        <h5>Portfolio</h5>
        <h2>
          <span className="tag">&lt;h2&gt;</span> Featured Projects{" "}
          <span className="tag">&lt;/h2&gt;</span>
        </h2>
      </div>

      <div className="container project__container">
        {data.map(({ id, image, title, description, view, more }) => {
          return (
            <article className="project__item">
              <div className="project__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <h4>{description}</h4>
              <div className="project__item-cta">
                {/* <a href={view} className="btn">
                  Preview
                </a> */}
                <a href={view} className="btn btn-primary">
                  Preview
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
