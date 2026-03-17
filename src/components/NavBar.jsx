import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="active">Home</li>
        <li>About us</li>
        <li>Blog</li>
        <li>Pricing</li>
      </ul>
    </nav>
  );
};

export default NavBar;
