import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={`{nav-item ${active}`}>
            <Link to={to} className="nav-link"> {label}  </Link>
          </li>
        );
      }}
    />
  );
};

const menus = [
  {
    name: "Home",
    to: "/",
    active: "true"
  },
  {
    name: "About",
    to: "/about",
    active: "false"
  },
  {
    name: "Contact",
    to: "/contact",
    active: "false"
  },
  {
    name: "Products",
    to: "/products",
    active: "false"
  }
];

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">King Dog</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">{this.showMenu(menus)}</ul>
        </div>
      </nav>
    );
  }

  showMenu = menus => {
    var result = null;
    result = menus.map((menu, index) => {
        return(
            <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.activeOnlyWhenExact}
          />
        )
     
    });
    return result;
  };
}

export default Menu;
