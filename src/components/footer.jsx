import React from "react";
import "./css/footer.css";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";

const Footer = () => {
  return (
    <div className="containerFooter">
        <div className="containerLeft">
            <div className="redesSociais">
                <span>Redes Sociais</span>
                <ul>
                    <li><img src={githubIcon} alt="github" width={32} height={32} style={{ marginRight: '8px' }} /><a href="https://github.com/GuilhermeP18" target="_blank" rel="noopener noreferrer">Github</a></li>
                    <li><img src={linkedinIcon} alt="linkedin" width={32} height={32} style={{ marginRight: '8px' }} /><a href="https://www.linkedin.com/in/luis-guilherme-pereira-ba8a54236/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
            </div>
        </div>
        <div className="containerRight">
            
        </div> 
    </div>
  );
};

export default Footer;

