import "./Footer.css";
import React from "react";
import reactLogo from "../logos/react-logo.svg";
import bootstrapLogo from "../logos/bootstrap-logo.png";
import semanticLogo from "../logos/semantic-ui-logo.png";

const Footer = () => {
  return (
    <div className="footer text-center text-justify">
      <div className="footer-content row">
        <div className="col col-sm-12">
          <p>Designed and Built by Jiacheng Zhang</p>
          <span>
            Built with
            <img title="react" alt="react" src={reactLogo} />
            <img title="react" alt="react" src={semanticLogo} />
            <img title="react" alt="react" src={bootstrapLogo} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
