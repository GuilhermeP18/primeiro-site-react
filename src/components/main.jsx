

import React, { useEffect, useState } from "react";
import "./css/main.css";
import fundo from "../assets/fundo.png"

function Main() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // O texto se move na mesma proporção que a imagem de fundo

    return (
        <main>
            <div className="mainContent">
                <div className="contentGrade">
                    <h2>Projetos em andamento</h2>]
                    
                </div>
            </div>
        </main>
    );
}

export default Main;
