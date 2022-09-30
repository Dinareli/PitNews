import React from "react";
import'./style.css';
import Cabecalho from '../../componentes/Cabecalho';
import Pesquisa from '../../componentes/Pesquisa';
import Post from '../../componentes/Post';

function PaginaPesquisa() {
    return (
        <div className="pagina-pesquisa">
            <Cabecalho/>
            <Pesquisa/>
            <div className="posts">
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
}
export default PaginaPesquisa;