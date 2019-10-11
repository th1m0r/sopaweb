import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import CadastroAssistido from './pages/CadastroAssistido'
import ListagemAssistidos from './pages/ListagemAssistidos'
import ListagemAniversariantes from './pages/ListagemAniversariantes'
import FrequenciaAssistidos from './pages/FrequenciaAssistidos'
import Dashboard from './pages/dashboard/dashboard'

export default function Routes() {

    return (
        <div className='content-wrapper'>
                <Switch>
                    <Route path='/' component={Dashboard} exact />
                    <Route path="/cadastro" component={CadastroAssistido} />
                    <Route path="/pesquisa" component={ListagemAssistidos} />
                    <Route path="/aniversariantes" component={ListagemAniversariantes} />
                    <Route path="/frequencia" component={FrequenciaAssistidos} />
                    <Redirect from='*' to='/' />
                </Switch>
        </div>
    )
}