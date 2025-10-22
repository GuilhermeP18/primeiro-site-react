import React from "react";
import "../styles/footer.css";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";

// Crie um componente para os links sociais
const SocialLink = ({ href, icon, alt, children }) => (
  <li>
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="socialLink"
      aria-label={alt}
    >
      <img src={icon} alt={alt} width={32} height={32} />
      <span>{children}</span>
    </a>
  </li>
);

const Footer = () => {
  return (
    <footer className="containerFooter">
      <div className="containerLeft">
        <div className="redesSociais">
          <span>Redes Sociais</span>
          <ul>
            <SocialLink
              href="https://github.com/GuilhermeP18"
              icon={githubIcon}
              alt="GitHub"
            >
              Github
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/luis-guilherme-pereira-ba8a54236/"
              icon={linkedinIcon}
              alt="LinkedIn"
            >
              LinkedIn
            </SocialLink>
          </ul>
        </div>
      </div>
      <div className="containerRight">
        {/* Adicione conteúdo aqui ou remova se não for usar */}
      </div>
    </footer>
  );
};

export default Footer;