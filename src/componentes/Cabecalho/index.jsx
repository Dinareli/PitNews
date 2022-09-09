import React from 'react';
import './style.css';
import Logo from '../../imagens/logo-dock.svg';
import Voltar from '../../imagens/voltar.svg';
import { Link } from 'react-router-dom';

function Cabecalho() {
  return (
    <div className='cabecalho'>
      <img src={Logo} id='logo' alt='some value'/>
      <Link to='/'>
        <div className='voltar-inicio'>
          <img src={Voltar} alt='some value'/>
          <p>Voltar para o início </p>
        </div>
      </Link>
    </div>
  );
}

export default Cabecalho;