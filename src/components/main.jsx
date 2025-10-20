

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
                <div>
                    <h2 >Projetos em andamento</h2>
                </div>
                <div className="contentMainGrade">

                    <div className="contentGrid">
                        <img src="" alt="" />
                        <h3>Projeto1</h3>
                    </div>
                    <div className="contentGrid">
                        <img src="" alt="" />
                        <h3>Projeto2</h3>
                    </div>
                    <div className="contentGrid">
                        <img src="" alt="" />
                        <h3>Projeto3</h3>
                    </div>
                    <div className="contentGrid">
                        <img src="" alt="" />
                        <h3>Projeto4</h3>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
