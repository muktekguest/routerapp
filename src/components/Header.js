import React, { Component } from "react";

import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav>
        <ul className="Menu">
          <li className="Menu-Item">
            <Link to="/">Home</Link>
          </li>
          <li className="Menu-Item">
            <Link to="/about">About</Link>
          </li>
          <li className="Menu-Item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
