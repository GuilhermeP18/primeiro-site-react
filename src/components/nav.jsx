import React, { useEffect, useState, useRef } from "react";
import "./css/nav.css";

function Nav() {
  const [hideNav, setHideNav] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setHideNav(true); // rolando para baixo, esconde
      } else {
        setHideNav(false); // rolando para cima, mostra
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navContainer${hideNav ? " navContainer--hidden" : ""}`}>
      <div className="leftNavContainer">
        <ul>
          <li>Inicio</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </div>
      <div className="rightNavContainer">
        <ul>
          <li>Login</li>
          <li>Cadastro</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;