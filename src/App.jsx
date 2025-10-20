import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Nav from "./components/nav.jsx";
import Footer from "./components/footer.jsx";
import Main from "./components/main.jsx";
import blackBg from "./assets/black.jpeg";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundStyle = {
    background: `
      linear-gradient(to bottom, rgba(0,0,0,0) 100%, #181818 99%),
      url(${blackBg})
    `,
    backgroundSize: "120% auto",
    backgroundRepeat: "no-repeat",
  backgroundPosition: `center calc(-10vh - ${scrollY * 0.5}px)`,
    minHeight: "100vh",
    transition: "background-position 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
  };

  return (
    <div style={backgroundStyle}>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Nav />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
