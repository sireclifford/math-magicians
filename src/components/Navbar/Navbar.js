import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <div className="navContainer">
      <div className="logo">Math Magicians</div>
      <div className="navItems">
        <NavLink className="links" to="/">
          Home
        </NavLink>
        <NavLink className="links" to="/calculator">
          Calculator
        </NavLink>
        <NavLink className="links" to="/quote">
          Quote
        </NavLink>
      </div>
    </div>
  </div>
);

export default Navbar;
