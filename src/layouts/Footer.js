import "./Footer.css";
import React from "react";

const Footer = ({ footerLogos }) => {
  let key = 1;
  return (
    <div className="footer text-center text-justify">
      <div className="footer-content row">
        <div className="col col-sm-12">
          <p>Designed and Built by Jiacheng Zhang</p>
          <span>
            Built with
            {footerLogos.map((logo) => (
              <img key={key++} title="react" alt="react" src={logo} />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
