import React from "react";

const Link = ({ className, href, content, style, uppercase = true }) => {
  return (
    <a
      className={`${
        uppercase ? "text-uppercase" : "text-lowercase"
      } ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      style={{ ...style, ...{ textDecoration: "none" } }}
    >
      {content}
    </a>
  );
};

export default Link;
