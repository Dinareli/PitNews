import React from 'react';
import './style.css';
import Lupa from '../../imagens/lupa.svg';

function Pesquisa(){
  return(
    <div className = "pesquisa">
      <input type="text" placeholder="Pesquisar Notícias"/>
      <button> <img id= "lupa" src= {Lupa} alt='some value'/> </button>
    </div>
  );
}

export default Pesquisa;
