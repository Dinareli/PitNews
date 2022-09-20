import React from "react";
import "./style.css";
import Grafico from "../../imagens/grafico.png";
import { useState } from "react";

function Ranking() {
    const [visivel, setVisivel] = useState(false);
    const [textoBotao, setTextoBotao] = useState("Ver mais");

    function mostrarDiv() {
        if (!visivel) {
            setVisivel(true);
            setTextoBotao("Ver menos");
        } else {
            setVisivel(false);
            setTextoBotao("Ver mais");
        }
    }

    return(
        <div className="ranking">
            <div className="grafico">
                <img src={Grafico} alt=""/>
                {visivel && (
                    <div className="escolas">
                        <li>4º lugar</li>
                        <li>5º lugar</li>
                        <li>6º lugar</li>
                    </div>
                )}
            </div>
            <div className="rodape">
                <button type="button" onClick={mostrarDiv}>
                    {textoBotao}
                </button>
            </div>
        </div>
    );
}

export default Ranking;
