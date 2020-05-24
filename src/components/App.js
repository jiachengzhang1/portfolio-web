import React from "react";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import "../main.css";
import Window from "../layouts/Window";

class App extends React.Component {
  state = {
    resumeLink:
      "https://jzhangdeveloper-website.s3.amazonaws.com/resume/Resume2020.pdf",
    projects: [
      {
        title: "jzhangdeveloper.com",
        subtitle: "Protfolio Website",
        description: `A responsive portfolio website to showcase projects, skills and educations through
        Portfolio, About and Contact pages. The Front-End was built using React, Bootstrap and Sematic UI 
        with CSS for custom styling.`,
        demoLink: "https://www.jzhangdeveloper.com",
        codeLink: "https://github.com/jiachengzhang1/portfolio-web",
        technologies: [
          { name: "React", link: "https://reactjs.org/" },
          { name: "Bootstrap", link: "https://getbootstrap.com/" },
          { name: "Semantic UI", link: "https://semantic-ui.com/" },
        ],
        imageURL:
          "https://jzhangdeveloper-website.s3.amazonaws.com/images/project_web.png",
        time: "May 2020",
      },
    ],
    statement: `I'm a Graduate Student at the University of Arizona. 
    I'm driven to solve day to day problems by creating web applications.`,
    educations: [
      {
        university: "University of Arizona",
        degrees: [
          {
            type: "Master of Science",
            major: "Computer Science",
            secondMajor: "",
            minor: "",
            period: "2019 - 2021",
            gpa: "4.0",
            honors: [],
          },
          {
            type: "Bachelor of Science",
            major: "Computer Science",
            secondMajor: "Mathematics",
            minor: "Statistics and Data Science",
            period: "2016 - 2019",
            gpa: "3.8",
            honors: [
              "Magna Cum Laude",
              "Dean’s List With Distinction",
              "Dean's List",
            ],
          },
        ],
      },
    ],
    skills: [
      {
        name: "Front-End Development",
        skills: [
          { name: "Languages", skills: ["JavaScript", "HTML5", "CSS"] },
          {
            name: "Frameworks",
            skills: ["React", "Redux", "Bootstrap", "Semantic UI", "D3.js"],
          },
        ],
      },
      {
        name: "Back-End and Deployment",
        skills: [
          {
            name: "Back-End",
            skills: ["Node.js", "Python", "SQL", "MongoDB"],
          },
          {
            name: "Deployment",
            skills: ["AWS", "Git", "Ubuntu Hosting"],
          },
        ],
      },
    ],
    contacts: [
      {
        name: "Email",
        content: "jiachengzhangdeveloper@outlook.com",
        link: "mailto:jiachengzhangdeveloper@outlook.com?",
        icon: <MdEmail size={23} color={"black"} />,
      },
      {
        name: "GitHub",
        content: "github.com/jiachengzhang1",
        link: "https://github.com/jiachengzhang1",
        icon: <AiFillGithub size={23} color={"black"} />,
      },
      {
        name: "LinkedIn",
        content: "linkedin.com/in/jiacheng-zhang-881174161",
        link: "https://linkedin.com/in/jiacheng-zhang-881174161 ",
        icon: <AiFillLinkedin size={23} color={"black"} />,
      },
    ],
    footerLogos: [
      "https://jzhangdeveloper-website.s3.amazonaws.com/logos/react-logo.svg",
      "https://jzhangdeveloper-website.s3.amazonaws.com/logos/semantic-ui-logo.png",
      "https://jzhangdeveloper-website.s3.amazonaws.com/logos/bootstrap-logo.png",
    ],
  };
  render() {
    return <Window state={this.state} />;
  }
}

export default App;
