import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="leftContainer">
        <ul>
          <li>Desenvolvido por <a href="https://www.linkedin.com/in/seu-perfil/" target="_blank" rel="noopener noreferrer">Luis Guilherme Pereira</a></li>
          <li>© 2023 Todos os direitos reservados</li>
          <li>Contato: <a href="mailto:seuemail@example.com">luisguilhermep16@gmail.com</a></li>
          <li>Redes sociais: 
            <a href="https://www.linkedin.com/in/luis-guilherme-pereira-ba8a54236/" target="_blank" rel="noopener noreferrer"> LinkedIn</a> |
            <a href="https://www.instagram.com/seuperfil/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
        </ul>
      </div>
      <div className="rightContainer">
        <ul>
          <li>Feito com ❤️ usando React</li>
          <li>Este site é um projeto de portfólio para demonstrar habilidades em desenvolvimento web.</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
