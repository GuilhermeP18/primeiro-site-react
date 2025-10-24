import { Link, NavLink } from "react-router-dom";

import React from "react";

import "./nav.css";

function Nav() {

  return (
    <header >
      <nav className="navbar">
        <ul className="ul-nav">
          <li><NavLink to="/Home">Inicio</NavLink></li>
          <li><NavLink to="/about" >Sobre</NavLink></li>
          <li><NavLink to="/contact" >Contato</NavLink></li>
        </ul>
          
        
      </nav>
    </header>


  );
}

export default Nav;