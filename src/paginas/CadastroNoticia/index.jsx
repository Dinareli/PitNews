import React from "react";
import './style.css';
import MenuLateral from '../../componentes/MenuLateral';
import Upload from '../../imagens/upload.svg';

function CadastroNoticia() {
    return (
        <div className="cadastro-noticia">
            <MenuLateral/>
            <div className="caixa-cadastro-noticia">
                <h2>Cadastro de Notícia</h2>
                <div className="inserir">
                    <div className="campo-texto">
                        <label>Título</label>
                        <input type='text' name="titulo" placeholder="Título"/>
                    </div>
                    <div className="campo-texto-maior">
                        <label>Texto</label>
                        <textarea type="text" name="texto" placeholder="Digite o texto para o post"/>
                    </div>
                    <label>Imagem da capa</label>
                    <button id='btUpload'>
                        <p>Upload</p>
                        <img src={Upload}/>
                    </button>
                </div>
                <button id="btCadastroNoticia">
                    Cadastrar Noticia
                </button>
            </div>
        </div>
    );
}

export default CadastroNoticia;