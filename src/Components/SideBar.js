import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/sidebar.css";
import { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import InfoIcon from "@material-ui/icons/Info";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import HelpIcon from "@material-ui/icons/Help";
import { NavLink } from "react-router-dom";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.navItems = [
      {
        icon: <DashboardIcon />,
        route: "/",
        text: "Dashboard",
      },
      {
        icon: <InfoIcon />,
        route: "/about",
        text: "About Us",
      },
      {
        icon: <ContactMailIcon />,
        route: "/contact",
        text: "Contact Us",
      },
      {
        icon: <HelpIcon />,
        route: "/help",
        text: "Help",
      },
    ];
  }
  render() {
    return (
      <Drawer variant="temporary" anchor="left" open={this.props.display}>
        <List>
          {this.navItems.map((item, index) => {
            return (
              <ListItem button key={index}>
                <NavLink to={item.route} className="custom-nav-item">
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    className="custom-nav-text"
                  />
                </NavLink>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    );
  }
}

export default SideBar;
