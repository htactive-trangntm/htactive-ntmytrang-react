import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import p1 from "./issets/images/alaska.jpg";
import p2 from "./issets/images/gdog.jpg";
import p3 from "./issets/images/pull.jpg";
import p4 from "./issets/images/shiba.jpg";
import p5 from "./issets/images/vang.jpg";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";


class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          img: p1,
          name: "Golden Dog",
          description: "so cute and so sexy",
          price: 145000
        },
        {
          id: 2,
          img: p2,
          name: "Shiba Dog",
          description: "so cute and so sexy",
          price: 145000
        },
        {
          id: 3,
          img: p3,
          name: "Pull Dog",
          description: "so cute and so sexy",
          price: 145000
        },
        {
          id: 4,
          img: p4,
          name: "Baby Dog",
          description: "so cute and so sexy",
          price: 145000
        },
        {
          id: 5,
          img: p5,
          name: "Alaska Dog",
          description: "so cute and so sexy",
          price: 145000
        }
      ]
    };
  }
  render() {
    return (
      <Router>
        <div>
          {/* <Switch>{this.showContentMenu(routes)}</Switch> */}
          <Switch>
            <Route
              path="/"
              exact={true}
              component={() => <Home products={this.state.products} />}
            />
            <Route
              path="/product/:id"
              component={({ match }) => (
                <ProductDetail products={this.state.products} match={match} />
              )}
            />
            <Route
              path="/about"
              component={() => (
                <About />
              )}
            />
             <Route
              path="/contact"
              component={() => (
                <Contact />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
