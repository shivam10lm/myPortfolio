import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const Header = () => {
  return (
    <>
      <div className="heading">
        <p>Hi.</p>
        <h1>
          My name is Shivam Gupta.
          <br /> Web Developer.
        </h1>
        <a href="#about" className="btn-about">
          About me <ArrowForwardIcon className="forward" />
        </a>
      </div>
    </>
  );
};

export default Header;
