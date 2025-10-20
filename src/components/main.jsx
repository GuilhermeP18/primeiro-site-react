

import React, { useEffect, useState } from "react";
import "./css/main.css";
import fundo from "../assets/fundo.png"
import devAlert from "../assets/devAlert.png"

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
                    <h2 >PROJETOS EM ANDAMENTO</h2>
                </div>
                <div className="contentMainGrade">

                    <div className="contentGrid">
                        <img src={devAlert} width={356} height={300} alt="" />
                        <h3>Projeto1</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut distinctio delectus corrupti repellat velit. Iusto, fugiat? Accusantium delectus explicabo a cum saepe, dolore, earum dicta voluptas enim quaerat ad veniam.</p>
                    </div>
                    <div className="contentGrid">
                        <img src={devAlert} width={356} height={300} alt="" />
                        <h3>Projeto2</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet rem reiciendis tempora voluptas, harum nemo fugit asperiores aut accusamus enim commodi iste nam illum molestias voluptatem laudantium soluta consequuntur autem.</p>
                    </div>
                    <div className="contentGrid">
                        <img src={devAlert} width={356} height={300} alt="" />
                        <h3>Projeto3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, cupiditate ullam! Inventore, cupiditate doloribus repellendus incidunt iusto veniam sapiente assumenda odit, nulla at fugiat sint similique sed aspernatur, deleniti accusamus!</p>
                    </div>
                    <div className="contentGrid">
                        <img src={devAlert} width={356} height={300} alt="" />
                        <h3>Projeto4</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, quibusdam nam placeat quae voluptatem dignissimos, tempore eius quas sequi quidem deserunt blanditiis, aperiam suscipit vel id eum! At, velit repellat?</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
