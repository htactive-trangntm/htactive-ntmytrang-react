import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";
import Menu from "./components/Menu";
import routes from "./routes"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Switch>
            {this.showContentMenu(routes)}
          </Switch>
        </div>
      </Router>
    );
  }

  showContentMenu = routes => {
    var result = "";
    if (routes.length > 0) {
      result = routes.map((items, index) => {
        return (
          <Route key={index} exact={items.exact} path={items.path} component={items.main} />
        );
      });
    }
    return result;
  };
}

export default App;
