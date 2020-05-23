import React from "react";

const Title = ({
  title,
  small = false,
  className = "text-center text-uppercase",
}) => {
  return small ? (
    <h5
      className={className}
      style={{
        fontFamily: "'Overpass Mono', monospace",
        fontSize: "20px",
      }}
    >
      {title}
    </h5>
  ) : (
    <h4 className={className} style={{ fontFamily: "'Fira Code', monospace" }}>
      {title}
    </h4>
  );
};

export default Title;
