import React from "react";
import { Link } from "react-router-dom";

export default class NavigationBar extends React.Component {
  state = { activeItem: this.props.path };

  onMenuItemClicked = (e, name) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <div
        className="navigation-bar ui inverted three item menu bg-dark rounded-lg"
        style={{ fontFamily: "'Fira Code', monospace", fontSize: "14px" }}
      >
        <Link
          to="/"
          className={` ${activeItem === "/" ? "active item" : "item"}`}
          onClick={(e) => this.onMenuItemClicked(e, "/")}
        >
          PROJECTS
        </Link>
        <Link
          to="/about"
          className={activeItem === "/about" ? "active item" : "item"}
          onClick={(e) => this.onMenuItemClicked(e, "/about")}
        >
          ABOUT
        </Link>
        <Link
          to="/contact"
          className={activeItem === "/contact" ? "active item" : "item"}
          onClick={(e) => this.onMenuItemClicked(e, "/contact")}
        >
          CONTACT
        </Link>
      </div>
    );
  }
}
