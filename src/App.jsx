import Nav from "./components/Navbar/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Main from "./components/Main/index.jsx";
import {About, Contact, Home} from "./pages/index.js";  
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />        
      </Routes>
      <Main />
      <Footer />
    </>
    
  );
}

export default App;
