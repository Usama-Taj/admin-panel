import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Component } from "react";

class Header extends Component {
  state = { sidebar: true };
  showMenu = () => {
    this.state.sidebar === false && this.setState({ sidebar: true });
    this.props.sideBar(this.state.sidebar);
  };
  render() {
    return (
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            onClick={this.showMenu}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Admin Panel</Typography>
          <IconButton color="inherit" style={{ marginLeft: "auto" }}>
            <AccountCircleIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
