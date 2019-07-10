import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/about",
    exact: false,
    main: () => <About />
  },
  {
    path: "/contact",
    exact: false,
    main: () => <Contact />
  },
  {
    path: "/products/:id",
    exact: false,
    main: ({ match }) => <ProductDetail match={match} />
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />
  }
];

export default routes;
