import React from "react";
import './style.css';
import Cabecalho from "../../componentes/Cabecalho";
import Cadastro from "../../componentes/Cadastro";

function PaginaCadastro() {
    return (
        <div className="pagina-cadastro">
            <Cabecalho/>
            <div className="ajuste-cadastro">
                <Cadastro/>
            </div>
        </div>
    );
}

export default PaginaCadastro;