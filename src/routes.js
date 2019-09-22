import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';
import CadastroAssistidos from './pages/CadastroAssistido'

export default function Routes() {

    return (
            <BrowserRouter>
                <Route path="/" component={Login} exact />
                <Route path="/main" component={Main} />
                <Route path="/cadastro" component={CadastroAssistidos} />
            </BrowserRouter>
    );
}