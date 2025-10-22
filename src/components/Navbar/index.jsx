
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/nav.css";

function Nav() {

  return (
    <header >
      <nav className="navbar">
        <ul className="left-nav">
          <li className="siteLogo"><Link to="/" className="noHover">PortiFolio</Link></li>
        </ul>
        <ul className="right-nav">
          <li><NavLink to="/about" >Sobre</NavLink></li>
          <li><NavLink to="/contact" >Contato</NavLink></li>
        </ul>
          
        
      </nav>
    </header>


  );
}

export default Nav;