import React from 'react';
import './style.css';
import ImgNoticia from '../../imagens/imagem-noticia.png';
import Like from '../../imagens/like.svg';
import Chat from '../../imagens/chat.svg';

function Post() {
    return(
        <div className='post'>
            <div className='corpo-post'>
                <div className='imagem'>
                    <img id='imagem-noticia' src={ImgNoticia}/>
                </div>
                <div className='texto'>
                    <h1>Introdução ao Desenvolvimento Web</h1>
                    <p>É o termo utilizado para descrever o desenvolvimento de sites, na Internet ou numa intranet. 
                        O profissional que trabalha desenvolvendo websites pode ser um web designer (desenvolvedor do layout) ou um web developer (desenvolvedor de sistemas). 
                        O desenvolvimento refere-se a um processo de construção e testes do software especifico para a web, com a finalidade de se obter um conjunto de programas, que satisfazem as funções pretendidas, quer em termos de facilidade de uso ou compatibilidade com outros programas existentes. 
                        O desenvolvimento web pode variar desde simples páginas estáticas a aplicações ricas, comércios eletrônicos ou redes sociais.
                    </p>
                </div>
            </div>
            <div className='rodape'>
                <div className='curtidas'>
                    <img id='like' src={Like}/>
                    <p>8 curtidas</p>
                </div>
                    <div className='comentarios'>
                        <img id='chat' src={Chat}/>
                        <p> 10 comentários</p>
                    </div>
                </div>
            </div>

    );
}

export default Post;