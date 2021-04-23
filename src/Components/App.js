import { Component } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import Header from "./Header";
import SideBar from "./SideBar";

class App extends Component {
  state = { sidebarDisplayed: false };
  displaySidebar = (isDisplayed) => {
    this.setState({ sidebarDisplayed: isDisplayed });
    return this.state.sidebarDisplayed;
  };
  render() {
    return (
      <Box>
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
            <Typography variant="h4">Lorem Ipsum</Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Typography variant="h4">Lorem Ipsum</Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Typography variant="h4">Lorem Ipsum</Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
        </Box>
      </Box>
    );
  }
}

export default App;
