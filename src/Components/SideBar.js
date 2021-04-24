import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/sidebar.css";
import { Component } from "react";
import { NavLink } from "react-router-dom";

class SideBar extends Component {
  state = {};
  render() {
    return (
      this.props.display && (
        <ul className="nav flex-column bg-dark text-light">
          <li className="nav-item">
            <NavLink
              activeStyle={{
                color: "white",
              }}
              exact
              to="/"
              className="nav-link"
            >
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeStyle={{
                color: "white",
              }}
              exact
              to="/about"
              className="nav-link"
            >
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeStyle={{
                color: "white",
              }}
              exact
              to="/contact"
              className="nav-link"
            >
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeStyle={{
                color: "white",
              }}
              exact
              to="/help"
              className="nav-link"
            >
              Help
            </NavLink>
          </li>
        </ul>
      )
    );
  }
}

export default SideBar;
