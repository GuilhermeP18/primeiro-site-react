import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/main.jsx";
import BackgroundImage from "./components/BackgroundImage.jsx";

function App() {
  return (
    <>
      <BackgroundImage />
      <Nav />
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        minHeight: "100vh", 
        position: "relative", 
        zIndex: 1 
      }}>
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;