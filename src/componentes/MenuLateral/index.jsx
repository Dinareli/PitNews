import React from 'react';
import './style.css';
import Logo from '../../imagens/logo-dock.svg';
import Home from '../../imagens/home.svg';
import Add from '../../imagens/add.svg';
import Config from '../../imagens/config.svg';
import Sair from '../../imagens/sair.svg';

function MenuLateral(){
  return(
    <div className='menu-lateral'>
      <div className='sup'>
        <img id='logo' src={Logo} alt='some value'/>
        <button id='btHome'>
          <img id='home' src={Home} alt='some value'/>
        </button>
        <button id='btAdd'>
          <img id='add' src={Add} alt='some value'/>
        </button>
      </div>
      <div className='inf'>
        <button id='btConfig'>
          <img id='config' src={Config} alt='some value'/>
        </button>
        <button id='btSair'>
          <img id='sair' src={Sair} alt='some value'/>
        </button>
      </div>
    </div>
  );
}

export default MenuLateral;

