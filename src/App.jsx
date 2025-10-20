import Nav from "./components/nav.jsx";
import Footer from "./components/footer.jsx";
import Main from "./components/main.jsx";
import BackgroundImage from "./components/BackgroundImage.jsx";

function App() {
  return (
    <>
      <BackgroundImage />
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", position: "relative", zIndex: 1 }}>
        <Nav />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
