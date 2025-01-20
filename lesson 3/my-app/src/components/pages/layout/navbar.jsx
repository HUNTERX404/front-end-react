import React from 'react'
import { Link, NavLink } from 'react-router'

function Navbar() {
  return (
    <nav className="flex gap-4 p-4 border-b">
      <NavLink
        className={({ isActive }) => (isActive ? "text-red-500" : "")}
        to={"/"}
      >
        home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-red-500" : "")}
        to={"/about"}
      >
        about
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-red-500" : "")}
        to={"/movies"}
      >
        movies
      </NavLink>
    </nav>
  );
}

export default Navbar