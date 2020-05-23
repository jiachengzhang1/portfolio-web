import "./Project.css";
import React from "react";
import Link from "../utils/Link";

const WIDTH = 1024;

const getTime = (time) => {
  return (
    <div
      className="ui black right pointing ignored label time"
      style={{ left: "-115px", top: "-4px" }}
    >
      {time}
    </div>
  );
};

const getTextSection = (
  title,
  description,
  subtitle,
  demoLink,
  codeLink,
  windowSize
) => {
  const column = windowSize.width > WIDTH ? "col-md-5" : "col-md-12";
  return (
    <div className={`col ${column}`}>
      <h4 className="title">{title}</h4>
      <h5 className="subtitle">{subtitle}</h5>
      <p className="description ubuntu">{description}</p>
      <div className="project-links mt-5">
        <Link
          className={"monospace ui label"}
          href={demoLink}
          content={"Demo"}
        />
        <Link
          className={"monospace ui label"}
          href={codeLink}
          content={"Code"}
        />
      </div>
    </div>
  );
};

const getImageSection = (imageName, windowSize) => {
  console.log(windowSize);
  const column = windowSize.width > WIDTH ? "col-md-7" : "col-md-12";
  return (
    <div className={`col ${column}`}>
      <img
        className="project-img rounded float-right img-fluid"
        src={require(`../images/${imageName}`)}
        alt="project"
      />
    </div>
  );
};

const getContent = (
  windowSize,
  title,
  description,
  subtitle,
  demoLink,
  codeLink,
  imageName
) => {
  return windowSize.width > WIDTH ? (
    <div className="project-content row">
      {getTextSection(
        title,
        description,
        subtitle,
        demoLink,
        codeLink,
        windowSize
      )}
      {getImageSection(imageName, windowSize)}
    </div>
  ) : (
    <div className="project-content">
      <div className="row">
        {getTextSection(
          title,
          description,
          subtitle,
          demoLink,
          codeLink,
          windowSize
        )}
      </div>
      <div className="row">{getImageSection(imageName, windowSize)} </div>
    </div>
  );
};

const Project = ({ project, windowSize }) => {
  const {
    title,
    subtitle,
    description,
    demoLink,
    codeLink,
    technologies,
    imageName,
    time,
  } = project;

  const technologyTags = technologies.map(({ name, link }) => (
    <Link
      className={"ui tag label bg-dark text-light mr-3"}
      href={link}
      content={name}
    />
  ));
  return (
    <div className="project">
      {getTime(time)}
      {getContent(
        windowSize,
        title,
        description,
        subtitle,
        demoLink,
        codeLink,
        imageName
      )}

      <div className="technologies mt-1">
        <h6>TECHNOLOGIES</h6>
        {technologyTags}
      </div>
    </div>
  );
};

export default Project;
