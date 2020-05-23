import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "../utils/Link";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <Link
        href={"https://github.com/jiachengzhang1"}
        content={<FaGithub size={30} />}
        style={{ textDecoration: "none", color: "black", marginLeft: "10px" }}
      />
      <Link
        href={"https://www.linkedin.com/in/jiacheng-zhang-881174161/"}
        content={<FaLinkedin size={30} />}
        style={{ textDecoration: "none", color: "black", marginLeft: "10px" }}
      />
    </div>
  );
};

export default SocialLinks;
