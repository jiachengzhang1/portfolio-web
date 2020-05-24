import "./Footer.css";
import React from "react";

const Footer = ({ footerLogos }) => {
  return (
    <div className="footer text-center text-justify">
      <div className="footer-content row">
        <div className="col col-sm-12">
          <p>Designed and Built by Jiacheng Zhang</p>
          <span>
            Built with
            {footerLogos.map((logo) => (
              <img title="react" alt="react" src={logo} />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
