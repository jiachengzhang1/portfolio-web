import "./Subskills.css";
import React from "react";

const getColHTML = (name, col) => {
  return (
    <div className="col col-md-6">
      <h6 className="text-muted text-center mb-3">{name}</h6>
      {col}
    </div>
  );
};

const getCol = (skills) => {
  return skills.map((skill) => (
    <p className="text-center" key={skill}>
      {skill}
    </p>
  ));
};

const getContent = ({
  windowSize,
  leftName,
  leftSkills,
  rightName,
  rightSkills,
}) => {
  return windowSize.width > 796 ? (
    <div className="subskills-col">
      <div className="ui two column very relaxed stackable grid">
        {getColHTML(leftName, getCol(leftSkills))}
        {getColHTML(rightName, getCol(rightSkills))}
      </div>
      <div className="ui vertical divider">and</div>
    </div>
  ) : (
    <div className="subskills-col">
      <div className="row">{getColHTML(leftName, getCol(leftSkills))}</div>
      <div className="ui horizontal divider">and</div>
      <div className="row">{getColHTML(rightName, getCol(rightSkills))}</div>
    </div>
  );
};

const Subskills = (props) => {
  return (
    <div
      className="subskills ui segment border-0 p-4 rounded-lg ubuntu"
      style={{ backgroundColor: "#f9f9f9c5", boxShadow: "none" }}
    >
      {getContent(props)}
    </div>
  );
};

export default Subskills;
