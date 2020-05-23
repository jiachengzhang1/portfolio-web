import "./Timeline.css";
import React from "react";

const Timeline = ({ contents }) => {
  const listItem = contents.map(({ content, divider }) => {
    return divider ? (
      <li>
        {content}
        <hr />
      </li>
    ) : (
      <li>{content}</li>
    );
  });
  return <ul className="timeline">{listItem}</ul>;
};

export default Timeline;
