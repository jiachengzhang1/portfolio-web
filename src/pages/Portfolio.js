import React from "react";

import PageLayout from "../layouts/PageLayout";
import Timeline from "../layouts/Timeline";
import Title from "../components/Title";
import Project from "../components/Project";

const getProjectList = (projects, windowSize) => {
  let count = 1;
  const numProjects = projects.length;
  return projects.map((project) => {
    const tmp =
      count < numProjects
        ? {
            content: <Project windowSize={windowSize} project={project} />,
            divider: true,
          }
        : {
            content: <Project windowSize={windowSize} project={project} />,
            divider: false,
          };
    count += 1;
    return tmp;
  });
};

const constructContent = (projects, windowSize) => {
  return (
    <div className="portfolio row justify-content-center ml-5">
      <div className="col col-md-10">
        <Timeline contents={getProjectList(projects, windowSize)} />
      </div>
    </div>
  );
};

const Portfolio = ({ projects, windowSize }) => {
  return (
    <PageLayout
      header={<Title title={"Portfolio"} />}
      content={constructContent(projects, windowSize)}
    />
  );
};

export default Portfolio;
