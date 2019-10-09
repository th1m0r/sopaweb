import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './app'
import CadastroAssistido from './pages/CadastroAssistido'
import ListagemAssistidos from './pages/ListagemAssistidos'
import ListagemAniversariantes from './pages/ListagemAniversariantes'
import FrequenciaAssistidos from './pages/FrequenciaAssistidos'

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={App} exact />
                <Route path="/cadastro" component={CadastroAssistido} />
                <Route path="/pesquisa" component={ListagemAssistidos} />
                <Route path="/aniversariantes" component={ListagemAniversariantes} />
                <Route path="/frequencia" component={FrequenciaAssistidos} />
            </Switch>
        </ BrowserRouter>
    )
}