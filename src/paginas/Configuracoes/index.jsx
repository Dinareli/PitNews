import React from "react";
import './style.css';
import  MenuLateral from '../../componentes/MenuLateral';
import Cadastro from '../../componentes/Cadastro';

function Configuracoes() {
    return (
        <div className="configuracoes">
            <MenuLateral/>
            <div className="ajuste-cadastro">
                <Cadastro/>
            </div>
        </div>
    );
}

export default Configuracoes;