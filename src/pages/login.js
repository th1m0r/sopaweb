import './Login.css'
import React, { useState } from 'react';


import logo from '../assets/logo.png';
import api from '../services/api';

export default function Login({ history }) {
    const [usuario, setUsuario] = useState({ username: '', password: '' });


    async function handleSubmit(e) {
        e.preventDefault();
        console.log('Basic', window.btoa(usuario.username + ":" + usuario.password))
        try {
            const response = await api.get("/auth", 'Basic ' + window.btoa(usuario.username + ":" + usuario.password));
            console.log('Resposta:', response);
        } catch (e) {
            console.log('Erro:', e);
        }
        //ReactDOM.render(<App />, document.getElementById('root'));
    }


    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Sopa" />
                <input
                    type="text"
                    placeholder="Digite o usuário"
                    value={usuario.login}
                    onChange={e => setUsuario({ ...usuario, username: e.target.value })} />
                <input
                    type="password"
                    placeholder="Digite a senha"
                    value={usuario.senha}
                    onChange={e => setUsuario({ ...usuario, password: e.target.value })} />
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}