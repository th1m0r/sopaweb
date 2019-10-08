import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';
import CadastroAssistido from './pages/CadastroAssistido'
import PesquisaAssistido from './pages/PesquisaAssistido'
import EditarAssistido from './pages/EditarAssistido';
export default function Routes() {

    return (
        <BrowserRouter>
            <Route path="/" component={Main} exact />
            <Route path="/cadastro" component={CadastroAssistido} />
            <Route path="/editar/:codigo" component={EditarAssistido} />
            <Route path="/pesquisa" component={PesquisaAssistido} />
            <Route path="/aniversariantes" component={ListagemAniversariantes} />
            <Route path="/frequencia" component={FrequenciaAssistidos} />
            <Route path="/login" component={Login} />
        </BrowserRouter>
    );
}