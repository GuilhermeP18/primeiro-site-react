import React from "react";
import "../../styles/nav.css";

function Nav() {

  return (
    <header >
      <nav className="navbar">
        <ul>
          <li><Link to="/" className="nav-logo">Logo</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </nav>
    </header>

    
  );
}

export default Nav;