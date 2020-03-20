import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

function Header() {
  const headerStyle = {
    background: "red"
  };
  const h1Style = {
    fontSize: "100px"
  };
  return (
    <header className="header" style={headerStyle}>
      <h1 style={h1Style}>Welcome</h1>
    </header>
  );
}

export default Header;
