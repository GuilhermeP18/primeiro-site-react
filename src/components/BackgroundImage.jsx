import React, { useEffect, useState } from "react";
import blackBg from "../assets/black.jpeg";

const BackgroundImage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    zIndex: 1
  };

  const imageStyle = {
    width: "130%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    transform: `translateY(${scrollY * 0.5}px)`,
    filter: `blur(${Math.min(scrollY / 100, 5)}px) brightness(${1 - Math.min(scrollY / 1000, 0.3)})`,
    transition: "transform 0.8s cubic-bezier(0.4,0,0.2,1), filter 0.8s cubic-bezier(0.4,0,0.2,1)"
  };

  const gradientOverlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(to bottom, rgba(0,0,0,0) 70%, #181818 99%)",
    pointerEvents: "none",
    zIndex: 2
  };
  const welcomeStyle = {
    transform: `translateY(-${scrollY * 0.5}px)`,
    transition: "transform 0.8s cubic-bezier(0.4,0,0.2,1)",
    fontSize: "clamp(0.5rem, 10vw, 7.5rem)",
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    padding: "15vw 20vw 0 4vw",
    letterSpacing: "0.12em",
    zIndex: 3,
    position: "absolute",
    top: 0,
    left: 0,
    width: "30px",
    maxWidth: "100vw",
    boxSizing: "border-box",
    filter: `blur(${Math.min(scrollY / 100, 5)}px) brightness(${1 - Math.min(scrollY / 1000, 0.3)})`
  };

  return (
    <>
      <div style={containerStyle}>
        <img src={blackBg} alt="Background" style={imageStyle} />
        <div style={gradientOverlayStyle} />
        <div style={welcomeStyle}>SEJA BEM-VINDO</div>
      </div>
    </>
  ) 
};

export default BackgroundImage;
