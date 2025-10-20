import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Nav from "./components/nav.jsx";
import Footer from "./components/footer.jsx";
import Mains from "./components/mains.jsx";

function App() {  
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Nav />
      <main style={{ flex: 1, padding: "20px" }}>
        <div style={{ height: "100vh" }}></div>
  <Mains />
      </main>
      <Footer />
    </div>
  );
}

export default App;
