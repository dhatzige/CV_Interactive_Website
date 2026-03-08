import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <span className="navbar-title">Dimitris CV</span>
        <div className="navbar-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/your-thoughts" className={({ isActive }) => isActive ? 'active' : ''}>Your Thoughts</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 