import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';
import CadastroAssistido from './pages/CadastroAssistido'
import PesquisaAssistido from './pages/PesquisaAssistido'
export default function Routes() {

    return (
        <BrowserRouter>
            <Route path="/" component={Main} exact />
            <Route path="/login" component={Login} />
            <Route path="/cadastro" component={CadastroAssistido} />
            <Route path="/pesquisa" component={PesquisaAssistido} />
            <Route path="/aniversariantes" component={ListagemAniversariantes} />
            <Route path="/frequencia" component={FrequenciaAssistidos} />
        </BrowserRouter>
    );
}