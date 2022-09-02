import React from "react";
import CV from "../../assets/Resume_AimeeMasse.pdf";

export const CTA = () => {
  return (
    <div className="cta">
      <a href="#contact" className="btn">
        Contact Me
      </a>
      <a href={CV} download className="btn btn-primary">
        Download CV
      </a>
    </div>
  );
};

export default CTA;
