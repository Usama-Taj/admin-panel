import { Component } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import Dashboard from "./RouteComponents/Dashboard";
import AboutUs from "./RouteComponents/AboutUs";
import ContactUs from "./RouteComponents/ContactUs";
import Help from "./RouteComponents/Help";

class App extends Component {
  state = { sidebarDisplayed: false };
  displaySidebar = (isDisplayed) => {
    this.setState({ sidebarDisplayed: isDisplayed });
    return this.state.sidebarDisplayed;
  };
  render() {
    return (
      <Box>
        <Router>
          <Header sideBar={this.displaySidebar} />
          <Box>
            {this.state.sidebarDisplayed && (
              <SideBar display={this.displaySidebar} />
            )}

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
