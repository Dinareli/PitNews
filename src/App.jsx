import React from 'react';
import './App.css';
import Usuario from './componentes/Usuario';
import Pesquisa from './componentes/Pesquisa';
import MenuLateral from './componentes/MenuLateral';
import Curtida from './componentes/Curtida';
import Curtidas from './componentes/Curtidas';
import Comentarios from './componentes/Comentarios';
import CurtirComentar from './componentes/CurtirComentar';
import Cabecalho from './componentes/Cabecalho';
import Cadastro from './componentes/Cadastro';
import Post from './componentes/Post';
import Ranking from "./componentes/Ranking";
import Login from './paginas/Login';


function App() {
  return (
    <div className= "principal">
      <Login/>
    </div>
  );
}

export default App;