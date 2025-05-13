import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to="/about">About</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
