import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <NavLink to="/" className="nav-link" activeClassName="active" exact>
          Home
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/list" className="nav-link" activeClassName="active">
          Tasks
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/createnew" className="nav-link" activeClassName="active">
          Create New Task
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
