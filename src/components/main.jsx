import React from "react";
import "./css/main.css";
import devAlert from "../assets/devAlert.png";

// Crie um componente separado para os cards de projeto
const ProjectCard = ({ image, title, resumo,  }) => (
  <div className="contentGrid">
    <img src={image} width={420} height={300} alt={title} />
    <h3>{title}</h3>
    <p>{resumo}</p>
  </div>
);

function Main() {
  // Remova o estado scrollY não utilizado
  const projects = [
      {
        image: devAlert,
        id: 1,
        nome: "Em desenvolvimento",
        resumo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nihil dolorum asperiores at atque suscipit sunt laudantium iste modi impedit obcaecati alias, temporibus aut veniam iure quia ipsum reiciendis earum!"
      }
      // Adicione mais projetos aqui se quiser
  ]

  return (
    <main>
      <div className="mainContainer">
        <div className="mainTitle">
          <h1>Main title</h1>
        </div>
        <div className="projects contentMainGrade">
            {projects.map((proj) => (
              <ProjectCard
                key={proj.id}
                image={proj.image}
                title={proj.nome}
                resumo={proj.resumo}
              />
            ))}
        </div>
      </div>
    </main>
  );
}

export default Main;