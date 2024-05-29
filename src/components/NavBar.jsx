import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="kalvium">
            <Link to="/">Kalvium ❤️</Link>
          </li>
          <li className="right">
            <Link to="/contacts">Contacts</Link>
          </li>
          <li className="right">
            <Link to="/registrationform">Registration Form</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
