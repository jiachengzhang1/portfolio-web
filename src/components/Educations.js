import React from "react";
import Degrees from "./Degrees";
import Title from "./Title";

const Educations = ({ educations }) => {
  const eductionList = educations.map(({ university, degrees }) => (
    <Degrees university={university} degrees={degrees} />
  ));
  return (
    <div className="eduction row">
      <div className="col col-md-12">
        <Title title={"educations"} small />
        {eductionList}
      </div>
    </div>
  );
};

export default Educations;
