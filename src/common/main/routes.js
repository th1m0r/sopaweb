import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';

import App from './app'
import Dashboard from './pages/dashboard/dashboard'
import ListagemAssistidos from './pages/ListagemAssistidos'

export default function Routes() {

    return (
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Dashboard} />
                <Route path="pesquisa" component={ListagemAssistidos} />
            </Route>
            <Redirect from='*' to='/' />
        </Router>
        /*        <BrowserRouter>
                    <Route path="/" component={Main} exact />
                    <Route path="/cadastro" component={CadastroAssistido} />
                    <Route path="/editar/:codigo" component={EditarAssistido} />
                    <Route path="/aniversariantes" component={ListagemAniversariantes} />
                    <Route path="/frequencia" component={FrequenciaAssistidos} />
                    <Route path="/login" component={Login} />
            </BrowserRouter>*/

    );
}