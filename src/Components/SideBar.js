import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/sidebar.css";
import { Component } from "react";

class SideBar extends Component {
  state = {};
  render() {
    return (
      this.props.display && (
        <ul className="nav flex-column bg-dark text-light">
          <li className="nav-item">
            <span className="nav-link">Dashboard</span>
          </li>
          <li className="nav-item">
            <span className="nav-link">About Us</span>
          </li>
          <li className="nav-item">
            <span className="nav-link">Contact Us</span>
          </li>
          <li className="nav-item">
            <span className="nav-link">Help</span>
          </li>
        </ul>
      )
    );
  }
}

export default SideBar;
