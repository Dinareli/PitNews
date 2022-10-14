import React from 'react';
import './App.css';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import PaginaPrincipal from './paginas/PaginaPrincipal';
import Login from './paginas/Login';
import PaginaCadastro from './paginas/PaginaCadastro';
import Configuracoes from './paginas/Configuracoes';
import PaginaPesquisa from './paginas/PaginaPesquisa';
import CadastroNoticia from './paginas/CadastroNoticia';
import Home from './paginas/Home';
import SobreNos from './paginas/SobreNos';

function App() {
  return (
    <BrowserRouter>  
    <Routes>
      <Route exact={true} path="/"
        element={<Home/>}/>
      
      <Route exact={true} path="/sobre-nos"
        element={<SobreNos/>}/>
      
      <Route exact={true} path="/pesquisa"
        element={<PaginaPesquisa/>}/>
      
      <Route exact={true} path="/login"
        element={<Login/>}/>
      
      <Route exact={true} path="/cadastro"
        element={<PaginaCadastro/>}/>
      
      <Route exact={true} path="/pagina-principal"
        element={<PaginaPrincipal/>}/>
      
      
      <Route exact={true} path="/cadastro-noticia"
        element={<CadastroNoticia/>}/>
      
      <Route exact={true} path="/configuracoes"
        element={<Configuracoes/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;