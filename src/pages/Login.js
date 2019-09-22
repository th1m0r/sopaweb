import React, {useState} from 'react';

import './Login.css'
import logo from '../imagens/logo.png';

export default function Login({history}) {
    const [usuario, setUsuario]  = useState({login: '', senha: ''});
    

    async function handleSubmit(e) {
        e.preventDefault();
        //const response = await api.post("/login", {usuario, senha});
        history.push('/main');
    }


    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Sopa" />                
                <input 
                    type="text"
                    placeholder="Digite o usuário"
                    value={usuario.login} 
                    onChange={e => setUsuario({...usuario, login: e.target.value})}/>
                <input 
                    type="password"
                    placeholder="Digite a senha"
                    value={usuario.senha} 
                    onChange={e => setUsuario({...usuario, senha: e.target.value})}/>
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}