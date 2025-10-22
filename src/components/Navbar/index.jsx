
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/nav.css";

function Nav() {

  return (
    <header >
      <nav className="navbar">
        <ul>
          <li ><Link to="/" className="noHover">PortiFolio</Link></li>
          <li className="left-nav"><NavLink to="/about" >Sobre</NavLink></li>
          <li className="left-nav"><NavLink to="/contact" >Contato</NavLink></li>
        </ul>
      </nav>
    </header>


  );
}

export default Nav;