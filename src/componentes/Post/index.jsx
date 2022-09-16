import React from 'react';
import './style.css';
import ImgNoticia from '../../imagens/imagem-noticia.png';
import Like from '../../imagens/like.svg';
import Chat from '../../imagens/chat.svg';
import CurtirComentar from '../CurtirComentar';
import { useState } from 'react';

function Post() {
    const[curtida, setCurtida] = useState(false);
    const[comentario, setComentario] = useState(false);
    const[textoExtensão, setTextoExtensao] = useState('ver mais');
    const[visivel, setVisivel] = useState(false);
    const curtidas = ['Manoel', 'João', 'Carlos', 'Paula', 'Francisco', 'Joelder', 'Laura', 'Nelly']
    const comentarios = [
        {
            nome: 'Maria Clara',
            texto: 'Muito legal a iniciativa!'
        },
        {
            nome: 'Laura Campos',
            texto: 'Adorei a iniciativa!'
        }
    ]
    function expandir() {
        if (visivel) {
            setVisivel(false);
            setTextoExtensao('ver mais');
        } else {
            setVisivel(true);
            setTextoExtensao('ver menos')
        }
    }
    


    return(
        <div className='post'>
            <div className='corpo-post'>
                <div className='imagem'>
                    <img id='imagem-noticia' src={ImgNoticia}/>
                </div>
                <div className='texto'>
                    <h1>Introdução ao Desenvolvimento Web</h1>
                    <p>É o termo utilizado para descrever o desenvolvimento de sites, na Internet ou numa intranet {visivel && <span>. 
                        O profissional que trabalha desenvolvendo websites pode ser um web designer (desenvolvedor do layout) ou um web developer (desenvolvedor de sistemas). 
                        O desenvolvimento refere-se a um processo de construção e testes do software especifico para a web, com a finalidade de se obter um conjunto de programas, que satisfazem as funções pretendidas, quer em termos de facilidade de uso ou compatibilidade com outros programas existentes. 
                        O desenvolvimento web pode variar desde simples páginas estáticas a aplicações ricas, comércios eletrônicos ou redes sociais.
                    </span>} <span id='texto-extensão' onClick={() => expandir()}>{textoExtensão}</span></p>
                </div>
            </div>

            {curtida && <div className='pop-up'>
                <CurtirComentar bloco={1} curtidas={curtidas} comentarios={comentarios}/>
            </div>}
            {comentario && <div className='pop-up'> 
                <CurtirComentar bloco={2} curtidas={curtidas} comentarios={comentarios}/>
            </div>}

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