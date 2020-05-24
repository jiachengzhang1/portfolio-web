import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Portfolio from "../pages/Portfolio";
import About from "../pages/About";
import Contact from "../pages/Contact";

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

export default class Window extends React.Component {
  state = { width: 800, height: 182 };

  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    let currentPath = window.location.pathname;
    const {
      resumeLink,
      projects,
      statement,
      educations,
      skills,
      contacts,
      footerLogos,
    } = this.props.state;
    currentPath = currentPath === "/index.html" ? "/" : currentPath;
    return (
      <div className="container">
        <BrowserRouter>
          <Header path={currentPath} />
          <Route
            path="/index.html"
            exact
            component={() => (
              <Portfolio windowSize={this.state} projects={projects} />
            )}
          ></Route>
          <Route
            path="/"
            exact
            component={() => (
              <Portfolio windowSize={this.state} projects={projects} />
            )}
          />
          <Route
            path="/about"
            component={() => (
              <About
                windowSize={this.state}
                statement={statement}
                resumeLink={resumeLink}
                educations={educations}
                skills={skills}
              />
            )}
          />
          <Route
            path="/contact"
            component={() => (
              <Contact contacts={contacts} windowSize={this.state} />
            )}
          />
        </BrowserRouter>
        <Footer footerLogos={footerLogos} />
      </div>
    );
  }
}
