import React from "react";
import './style.css';
import Cabecalho from '../../componentes/Cabecalho';
import {Link} from 'react-router-dom';

function Login() {
    return (
        <div className="tela-login">
            <Cabecalho/>
            <div className="caixa-login">
                <h2>Faça login</h2>
                <div className="inserir">
                    <div className="campo-texto">
                        <label>E-mail</label>
                        <input type='email' name="email" placeholder="E-mail"/>
                    </div>
                    <div className="campo-texto">
                        <label>Senha</label>
                        <input type='password' name='senha' placeholder='Senha'/>
                    </div>
                    <p>Esqueceu a senha?</p>
                    <button className="login">Login</button>
                    <h4>
                        Não tem acesso? <Link to={'/cadastro'}>
                            <span id='cadastro'>Crie uma conta.</span></Link>
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default Login;