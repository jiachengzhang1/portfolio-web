import React from "react";
import { FiDownload } from "react-icons/fi";

import PageLayout from "../layouts/PageLayout";
import Title from "../components/Title";
import Skills from "../components/Skills";
import Educations from "../components/Educations";
import Link from "../utils/Link";
import Statement from "../components/Statement";

const constructHeader = (resumeLink) => {
  return (
    <div>
      <Title title={"About Me"} />
      <p className="text-center mb-4">
        <Link
          className={"btn btn-sm btn-outline-dark p-1"}
          href={resumeLink}
          content={
            <div>
              <span className="mr-1">
                <FiDownload size={18} />
              </span>
              <span>Resume</span>
            </div>
          }
        />
      </p>
    </div>
  );
};

const constructContent = (windowSize, educations, statement, skills) => {
  return (
    <div>
      <Statement statement={statement} />
      <hr />
      <div style={{ marginTop: "20px" }}>
        <Skills windowSize={windowSize} skills={skills} />
      </div>
      <hr />
      <div style={{ marginTop: "20px" }}>
        <Educations educations={educations} />
      </div>
    </div>
  );
};

const About = ({ windowSize, statement, resumeLink, educations, skills }) => {
  return (
    <PageLayout
      header={constructHeader(resumeLink)}
      content={constructContent(windowSize, educations, statement, skills)}
    />
  );
};

export default About;
