import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-nav">
          <Link className="nav-item nav-link " to="/">
            Home
          </Link>
          <Link className="nav-item nav-link " to="/cats">
            Cats
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
