import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">Buwaneka Arangalla</div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/achievements" activeClassName="active" className="nav-link">Achievements</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/charity" activeClassName="active" className="nav-link">Charity Work</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" activeClassName="active" className="nav-link">About Me</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
