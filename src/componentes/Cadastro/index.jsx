import React from 'react';
import './style.css';
// import {Link} from 'react-router-dom';

function Cadastro() {
  return (
    <div className='caixa-cadastro'>
      <h2>Cadastro</h2>
      <div className='inserir'>
        <h3>Dados Pessoais</h3>
        <div className='campo-texto'>
          <label>Nome</label>
          <input type='text' name='nome' placeholder='Nome'/>
        </div>
        <div className='campo-texto'>
          <label>E-mail</label>
          <input type='email' name='email' placeholder='E-mail'/>
        </div>
        <div className='campo-texto'>
          <label>Escola</label>
          <input type='text' name='escola' placeholder='Escola'/>
        </div>
        <div className='lado-a-lado'>
          <div className='campo-texto-menor'>
          <label>Cidade</label>
            <input type='text' name='cidade' placeholder='Cidade'/>
          </div>
          <div className='campo-texto-menor'>
          <label>Estado</label>
            <input type='text' name='estado' placeholder='Estado'/>
          </div>
        </div>
        <div className='lado-a-lado'>
          <div className='campo-texto-menor'>
          <label>Senha</label>
            <input type='password' name='senha' placeholder='Senha'/>
          </div>
          <div className='campo-texto-menor'>
          <label>Repetir Senha</label>
            <input type='password' name='rSenha' placeholder='Confirme a Senha'/>
          </div>
        </div>
      </div>
        <button id='btFnCadastro'>
          Concluir Cadastro
        </button>
    </div>

  );
}

export default Cadastro;