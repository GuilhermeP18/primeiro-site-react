import { React } from "react";
import MainContainer from "./AnimationCard.jsx";
import "../styles/main.css";

function Main() {
  const mainContainerCard = {
    width: "100%",
    height: "auto",
    backgroundColor: "#31777cff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const cardStyle = {
    width: "300px",
    height: "400px",
    backgroundColor: "#ffffff",
  };
  return (
    <>
    <div><h1>Portifolio</h1></div>
    <div style={mainContainerCard}>
    <div style={cardStyle}></div>
    </div>
    </>
  );
}

export default Main;
