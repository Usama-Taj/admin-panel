import { useState } from "react";
import Box from "@material-ui/core/Box";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Dashboard from "./RouteComponents/Dashboard";
import Customers from "./RouteComponents/Customers";
import Products from "./RouteComponents/Products";
import Help from "./RouteComponents/Help";
import SideBar from "./SideBar";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  content: {
    [theme.breakpoints.up("sm")]: {
      width: "calc(100% - 240px)",
      marginLeft: 240,
    },
    marginTop: "10vh",
  },
}));

const App = () => {
  const [displayed, setDisplayed] = useState(false);
  const onDisplay = (display) => {
    setDisplayed(display);
  };
  const classes = useStyles();
  const removeDrawer = () => {
    setDisplayed(false);
  };
  return (
    <Box>
      <Router>
        {/*NavBar // App BAR*/}
        <Header onDisplay={onDisplay} />
        <SideBar display={displayed} closeDrawer={removeDrawer} />
        <Box>
          {/*Drawer*/}

          <main className={classes.content}>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/customers" exact component={Customers} />
              <Route path="/products" exact component={Products} />
              <Route path="/help" exact component={Help} />
            </Switch>
          </main>
        </Box>
      </Router>
    </Box>
  );
};

export default App;
