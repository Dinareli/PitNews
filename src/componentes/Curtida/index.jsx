import React from 'react';
import './style.css';
import Like from '../../imagens/like.svg';

function Curtida({nome}) {
  return (
    <div className= 'curtida'>
    <img src={Like} alt='some value'/>
      <p>{nome}</p>
      </div>
  );
}

export default Curtida;