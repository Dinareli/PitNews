import React from 'react';
import './style.css';
import Like from '../../imagens/like.svg';
import Chat from '../../imagens/chat.svg';
import Curtida from '../Curtida';

function Curtidas() {
  return(
    <div className='caixa'>
      <div className='sup'>
        <div className='curtidas'>
          C
            <p>8 curtidas</p>
        </div>  
        <div className='comentarios'>
          <img id='chat' src={Chat} alt='some value'/>
            <p> 10 Comentários</p>
        </div>
      </div>
      <div className='corpo'>
        <button id='btCurtir'>
          <img src={Like} alt='some value'/>
            <p>Deixe sua curtida!</p>
        </button>
        <div className='lista-curtidas'>
          <Curtida nome={'Natalia'}/>
          <Curtida nome={'Dinareli'}/>
        </div>
      </div>
      <div className='rodape'>
        <p>Voltar</p>
      </div>
    </div>
  );
}

export default Curtidas;