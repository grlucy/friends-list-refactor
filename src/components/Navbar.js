import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Navbar() {
  const navStyle = {
    background: "green",
    justifyContent: "flex-end"
  };
  return (
    <nav className="navbar" style={navStyle}>
      <a href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
