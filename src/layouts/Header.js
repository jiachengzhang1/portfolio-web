import React from "react";
import SocialLinks from "../components/SocialLinks";
import NavigationBar from "../components/NavigationBar";

const Header = ({ path }) => {
  return (
    <div className="header">
      <div className="row mt-3">
        <div className="col-12 text-align-center">
          <h2
            className="text-uppercase font-weight-bolder text-center mt-3"
            style={{ fontFamily: "'Overpass Mono', monospace" }}
          >
            Jiacheng Zhang
            <SocialLinks />
          </h2>
        </div>
      </div>
      <div className="row mt-4 mb-5">
        <div className="col-12">
          <NavigationBar path={path} />
        </div>
      </div>
    </div>
  );
};

export default Header;
