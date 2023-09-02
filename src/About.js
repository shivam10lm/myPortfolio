import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="inner-about">
        <img src="https://i.ibb.co/SxCZrVW/tt.jpg" alt="dp" />
      </div>
      <div className="inner-about2">
        <span className="brdr"></span>
        <h1>About me</h1>
        <p>
          Hi, I’m a student currently pursuing a degree in Master of Engineering
          in Electrical and Computer Engineering from the University of Calgary.
        </p>
        <span className="para">
          I’m a determined Data Science enthusiast, Web Developer, specifically
          Front-end web development, and a compact competitive coder who’s
          working his way up this ladder with each passing hour.
        </span>
        <a href="#exp">
          {" "}
          Read more <ArrowForwardIcon className="forward" />
        </a>
      </div>
    </div>
  );
};
export default About;
