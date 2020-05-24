import "./Timeline.css";
import React from "react";

const Timeline = ({ contents }) => {
  let key = 0;
  const listItem = contents.map(({ content, divider }) => {
    return divider ? (
      <li key={key++}>
        {content}
        <hr />
      </li>
    ) : (
      <li key={key++}>{content}</li>
    );
  });
  return <ul className="timeline">{listItem}</ul>;
};

export default Timeline;
