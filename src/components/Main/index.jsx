import { React } from "react";
import "./main.css";
import Desenv from "../../assets/dev.jpg";

function Main() {
  const projectCards = [
    {
      id: 1,
      title: "Project Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, harum? Voluptate reiciendis earum fugit nostrum cum delectus maiores distinctio dolores! Expedita delectus ab dolores itaque reprehenderit vitae doloribus, fuga fugit.",
      imageUrl: Desenv,
    },
    {
      id: 2,
      title: "Project Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, harum? Voluptate reiciendis earum fugit nostrum cum delectus maiores distinctio dolores! Expedita delectus ab dolores itaque reprehenderit vitae doloribus, fuga fugit.",
      imageUrl: Desenv,
    }
  ];
  const mainContainerCard = {
    width: "100%",
    height: "auto",
    backgroundColor: "#31777cff",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    justifyItems: "center",
    alignItems: "start",
    padding: "40px 0"
  };

  const cardStyle = {
    width: "90%",
    height: "auto",
    padding: "20px",
    backgroundColor: "#ffffff",
    margin: "0", 
    borderRadius: "7px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
    
    
  };
  const h1Text = {
    fontSize: "100%",
    color: "#333333",
    textAlign: "center",
    margin: "20px 0",
    textTransform: "uppercase",
    fontSize: "clamp(2rem, 8vw, 4rem)"
  };
  return (
    <>
    <main>
      <div className="mainContainer">
        <h1 style={h1Text}>Projetos</h1>
      </div>
    </main>
      
    </>
  );
}

export default Main;
