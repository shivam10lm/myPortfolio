import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#project">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-center">
          <h6>© Copyright Shivam Gupta 2021</h6>
        </div>
        <div className="footer-right">
          <FacebookIcon href="facebook.com" className="fb" />
          <InstagramIcon className="insta" />
          <TwitterIcon className="twit" />
          <LinkedInIcon className="lin" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
