import "./Degrees.css";
import React from "react";
import Timeline from "../layouts/Timeline";

const getDegreeType = (type, major) => {
  console.log(type);

  return !type || !major ? "" : `${type} in ${major}`;
};

const getSecondMajorMinor = (secondMajor, minor) => {
  return !secondMajor && !minor ? (
    ""
  ) : (
    <div className="degree-major-minor">
      <div>{`Secondary Major in ${secondMajor}`}</div>
      <div>{`Minor in ${minor}`}</div>
    </div>
  );
};

const getHonors = (honors) => {
  return honors.length === 0 ? (
    ""
  ) : (
    <div className="degree-honors">
      <span>Honors: {honors.join("; ")}</span>
    </div>
  );
};

const getGPA = (gpa) => {
  return !gpa ? (
    ""
  ) : (
    <div className="degree-gpa">
      <p>GPA: {gpa}/4.0</p>
    </div>
  );
};

const getDegreeList = (degrees) =>
  degrees.map(({ type, major, secondMajor, minor, period, gpa, honors }) => ({
    content: (
      <div>
        <div className="degree-header">
          <span className="degree-type">{getDegreeType(type, major)}</span>
          <span className="degree-period float-right">{period}</span>
          {getSecondMajorMinor(secondMajor, minor)}
        </div>
        <div className="degree-details">
          {getHonors(honors)}
          {getGPA(gpa)}
        </div>
      </div>
    ),
    divider: false,
  }));

const Degrees = ({ university, degrees }) => {
  return (
    <div className="degree row mt-4">
      <div className="col-md-6 offset-md-3">
        <h4>{university}</h4>
        <Timeline contents={getDegreeList(degrees)} />
      </div>
    </div>
  );
};

export default Degrees;
