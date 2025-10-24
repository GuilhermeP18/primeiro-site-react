import React from 'react'
import reacticon from '../../assets/react.png'
import './footer.css'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="leftContainer">
        <ul className='leftList'>
          <li>Desenvolvido por <span style={{ color: 'rgba(173, 173, 173, 1)' }}>Luis Guilherme</span></li>
          <li>© 2025 Todos os direitos reservados</li>
          <li>Redes sociais: 
            <a href="https://www.linkedin.com/in/luis-guilherme-pereira-ba8a54236/" target="_blank" rel="noopener noreferrer"> LinkedIn</a> |
            <a href="https://www.instagram.com/seuperfil/" target="_blank" rel="noopener noreferrer"> Instagram</a>
          </li>
        </ul>
      </div>
      <div className="rightContainer">
        <ul className='rightList'>
          <li>Feito com  <img src={reacticon} width="36" height="36" alt="React icon" /></li>
          <li>Este site é um projeto de portfólio para demonstrar habilidades em desenvolvimento web.</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
