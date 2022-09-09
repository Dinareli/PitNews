import React, {useState, useEffect} from 'react';
import './style.css';
import Like from '../../imagens/like.svg';
import Chat from '../../imagens/chat.svg';
import Seta from '../../imagens/seta.svg';
import Comentario from '../Comentario';
import Curtida from '../Curtida';

function CurtirComentar ({bloco, curtidas, comentarios}) {
  const [exibeComentarios, setExibeComentarios] = useState(false)

  const [exibeCurtidas, setExibeCurtidas] = useState(true)
  const [voltar, setVoltar] = useState(true);

function mudaCorpo(bloco) {
  if (bloco === 1){
    setExibeComentarios(false);
    setExibeCurtidas(true);
  } else {
    setExibeComentarios(true);
    setExibeCurtidas(false);
    }
  }

  useEffect(() => {
    mudaCorpo(bloco)
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      {voltar && <div className='caixa'>
        <div className='sup'>
          <div className='curtidas' onClick={() => mudaCorpo(1)} tabIndex= '1'>
            <img id='like' src={Like} alt='some value'/>
            <p> 8 Curtidas</p>
          </div>
          <div className='comentarios' onClick={() => mudaCorpo(2)} tabIndex='2'>
            <img id='chat' src={Chat} alt='some value'/>
            <p> 10 Comentários</p>
          </div>
      </div>
      <div className='corpo'>
      {exibeCurtidas && 
      <div>
        <button id='btCurtir'>
          <img src={Like} alt='some value'/>
          <p>Deixe sua curtida!</p>
          </button>
          <div className='lista-curtidas'>
            {curtidas.map((nome) => (
              <Curtida key={nome} nome={nome}/>
            ))
            }
          </div>
      </div>}
        {exibeComentarios &&
          <div>
            <div className='comentar'>
              <input placeholder='Deixe aqui seu comentário'/>
              <button id='btComentar'>
                <img src={Seta} alt='some value'/>
              </button>
          </div>
            {
              comentarios.map((comentario) => (
                <Comentario key={comentario.nome} nome={comentario.nome} texto= {comentario.texto} />
              ))
            }
        </div>}
      </div>
      <div className='rodape' onClick={() => setVoltar(!voltar)}>
        <p>Voltar</p>
      </div>
    </div>}
  </div>
  );
}

export default CurtirComentar;