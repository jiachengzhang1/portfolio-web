import React from "react";
import Subskills from "./Subskills";
import Title from "./Title";

const getSubskillComponent = (windowSize, skills) => {
  return skills.map(({ name, skills }) => (
    <div
      className="card border-light"
      style={{ width: "100%", backgroundColor: "#f9f9f9c5" }}
      key={name}
    >
      <h6
        className="card-title text-center mb-2 pt-1"
        style={{ fontFamily: "'Fira Code', monospace", fontSize: "18px" }}
      >
        {name}
      </h6>
      <Subskills
        windowSize={windowSize}
        leftName={skills[0].name}
        leftSkills={skills[0].skills}
        rightName={skills[1].name}
        rightSkills={skills[1].skills}
      />
    </div>
  ));
};

const Skills = ({ windowSize, skills }) => {
  return (
    <div className="row mb-5">
      <div className="col col-md-12">
        <Title title={"Skills"} small />
        <div className="card-deck">
          {getSubskillComponent(windowSize, skills)}
        </div>
      </div>
    </div>
  );
};

export default Skills;
