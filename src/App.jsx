import React from 'react';
import './App.css';
import Usuario from './componentes/Usuario';
import Pesquisa from './componentes/Pesquisa';
import MenuLateral from './componentes/MenuLateral';
import Curtida from './componentes/Curtida';
import Curtidas from './componentes/Curtidas';
import Comentarios from './componentes/Comentarios';
// import CurtirComentar from './componentes/CurtirComentar';
// import Cabecalho from './componentes/Cabecalho';
import Cadastro from './componentes/Cadastro';

function App() {
  return (
  <div className= "principal">
    <Cadastro/>
  </div>
  );
}

export default App;