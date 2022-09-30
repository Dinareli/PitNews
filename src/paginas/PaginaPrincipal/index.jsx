import React from "react";
import	"./style.css";
import Usuario from '../../componentes/Usuario';
import Pesquisa from '../../componentes/Pesquisa';
import MenuLateral from '../../componentes/MenuLateral';
import CurtirComentar from '../../componentes/CurtirComentar';
import Post from '../../componentes/Post';
import Ranking from '../../componentes/Ranking';

function PaginaPrincipal() {
    return (
        <div className="principal">
            <MenuLateral/>
            <div className="corpo-principal">
                <div className="cabeca">
                    <div id='usuario'>
                        <Usuario nome={'Dinareli'}/>
                    </div>
                    <div id="pesquisa">
                        <Pesquisa/>
                    </div>
                </div>
                <div className="conteudo">
                    <div className="primeira-coluna">
                        <h1 id="titulo">Últimas Notícias</h1>
                        <div className="posts">
                            <Post/>
                            <Post/>
                            <Post/>
                        </div>
                    </div>
                    <div className="segunda-coluna">
                        <h1 id="titulo">Ranking das Escolas que mais publicam</h1>
                        <Ranking/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaginaPrincipal;