import React from "react";
import './style.css';
import Lupa from '../../imagens/lupa.svg';
import Chave from '../../imagens/chave.svg';
import Logo from '../../imagens/logo-dock.svg';
import Artigos from '../../imagens/artigos.png';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div className="pagina-home">
            <div className="conteudo-home">
                <div className="primeira-coluna">
                    <img id="logo" src={Logo} alt='logo'/>
                    <h1>Seu espaço de notícias sobre tecnologia.</h1>
                    <p>Confira aqui as últimas notícias sobre a escola!</p>
                </div>
            </div>
            <div className="botoes">
                <Link to={'/pesquisa'}>
                    <button id="btPesquisar">
                        <img src={Lupa} alt='lupa'/>
                        Pesquisar notícias
                    </button>
                </Link>

                    <Link to={'/login'}>
                        <button id="btLogin">
                            <img src={Chave} alt='chave'/>
                        </button>
                    </Link>
            </div>
            <div className="segunda-coluna">
                <div className="menu">
                    <button id="btInicio">
                        Início
                    </button>
                    <Link to={'/sobre-nos'}>
                        <button id="btSobreNos">
                            <a href="sobreNos.html">Sobre Nós</a>
                        </button>
                        <img src={Artigos} alt='artigos'/>
                    </Link>
                </div>
            </div>
        </div>
    );    
}

export default Home;