import React from "react";
import './style.css';
import {Link} from 'react-router-dom';
import Logo from  '../../imagens/logo.png';
import Facebook from '../../imagens/icon-facebook.svg';
import Instagram from '../../imagens/icon-instagram.svg';
import Global from '../../imagens/icon-global.svg';

function SobreNos() {
    return (
        <div className="pagina-sobre-nos">
            <div className="conteudo-sobre-nos">
                <div className="topo">
                    <img id='logo' src={Logo} alt='logo'/>
                    <div className="botoes">
                        <button id='btInicio'>
                            <Link to={"/"}>
                                <p>Início</p>
                            </Link>
                        </button>
                        <button id="btSobreNos">
                            Sobre Nós
                        </button>
                    </div>
                </div>
                <div className="titulo">
                    <h1 id='titulo'>
                        Somos a Pit News, um ambiente de notícias sobre tecnologia!
                    </h1>
                </div>
                <div className="subtitulo">
                    <p id="subtitulo">
                        Acompanhe as últimas publicações de sua escola aqui. Veja como a tecnologia pode auxiliar o ambiente escolar.
                    </p>
                </div>
                <div className="icones">
                    <a href="https://dock.tech/">
                        <img id="global" src={Global} alt="global"/>
                    </a>
                    <a href="https://pt-br.facebook.com/">
                        <img id="facebook" src={Facebook} alt="facebook"/>
                    </a>
                    <a href="https://www.instagram.com/">
                        <img id="instagram" src={Instagram} alt="instagram"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SobreNos;