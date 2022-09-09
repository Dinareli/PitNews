import React from 'react';
import './style.css';

function Usuario ({nome}){
  return (
    <div className = 'usuario'>
      <h1>Olá, {nome}</h1>
    </div>
  );
}
export default Usuario;