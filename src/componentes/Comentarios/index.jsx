import React from 'react';
import './style.css';
import Like from '../../imagens/like.svg';
import Chat from '../../imagens/chat.svg';
import Seta from '../../imagens/seta.svg';
import Comentario from '../Comentario';

function Comentarios(){
  return(
    <div className='caixa'>
      <div className='sup'>
        <div className='curtidas'>
          <img id='like' src={Like} alt='some value'/>
          <p> 8 curtidas</p>
        </div>
        <div className='comentarios'>
          <img id='chat' src={Chat} alt='some value'/>
          <p> 10 comentarios</p>
        </div>
      </div>
      <div className='corpo'>
        <div className='comentar'>
          <input placeholder='Deixe aqui seu comentário!'/>
          <button id='btComentar'>
            <img src={Seta} alt='some value'/>
          </button>
        </div>
        <div className='lista-comentarios'>
          <Comentario nome={'Nate'} texto={'Amei a ideia!'}/>
          <Comentario nome={'Dinareli'} texto={'Muito bom!'}/>
        </div>
      </div>
      <div className='rodape'>
        <p>Voltar</p>
      </div>
    </div>
  );
}

export default Comentarios;
  