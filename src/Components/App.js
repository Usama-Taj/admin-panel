import { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Dashboard from "./RouteComponents/Dashboard";
import AboutUs from "./RouteComponents/AboutUs";
import ContactUs from "./RouteComponents/ContactUs";
import Help from "./RouteComponents/Help";
import SideBar from "./SideBar";

class App extends Component {
  state = { sidebarDisplayed: false };
  displaySidebar = (isDisplayed) => {
    this.setState({ sidebarDisplayed: isDisplayed });
    return this.state.sidebarDisplayed;
  };
  handleClose = () => {
    this.setState({ sidebarDisplayed: false });
  };
  render() {
    return (
      <Box>
        <Router>
          <Header sideBar={this.displaySidebar} />
          <Box onClick={this.handleClose}>
            <SideBar display={this.state.sidebarDisplayed} />
            <Grid
              container
              direction="row"
              justify="center"
              style={{ marginTop: "60px" }}
            >
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/about" exact component={AboutUs} />
                <Route path="/contact" exact component={ContactUs} />
                <Route path="/help" exact component={Help} />
              </Switch>
            </Grid>
          </Box>
        </Router>
      </Box>
    );
  }
}

export default App;
