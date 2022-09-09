import React from 'react';
import './style.css';

function Comentario ({nome, texto}){
  return (
    <div className='comentario'>
    <p id='nome'>{nome}</p>
    <p id='texto'>{texto}</p>
    </div>
  );
}

export default Comentario;