import React from "react";
import "./css/main.css";
import devAlert from "../assets/devAlert.png";


const ProjectCard = ({ image, title, resumo,  }) => (
  <div className="contentGrid">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{resumo}</p>
  </div>
);

function Main() {
  
  const projects = [
      {
        image: devAlert,
        id: 1,
        nome: "Em desenvolvimento",
        resumo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nihil dolorum asperiores at atque suscipit sunt laudantium iste modi impedit obcaecati alias, temporibus aut veniam iure quia ipsum reiciendis earum!"
      },
      {
        image: devAlert,
        id: 2,
        nome: "Em desenvolvimento",
        resumo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nihil dolorum asperiores at atque suscipit sunt laudantium iste modi impedit obcaecati alias, temporibus aut veniam iure quia ipsum reiciendis earum!"
      }
      
  ]

  return (
    <main>
      <div className="mainContainer">
        <div className="mainTitle">
          <h1>Portifolio</h1>
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