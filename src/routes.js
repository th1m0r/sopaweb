import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Dashboard from './pages/dashboard/Dashboard'
import EditarAssistido from './pages/EditarAssistido'
import CadastroAssistido from './pages/CadastroAssistido'
import ListagemAssistidos from './pages/ListagemAssistidos'
import FrequenciaAssistidos from './pages/FrequenciaAssistidos'
import ListagemAniversariantes from './pages/ListagemAniversariantes'


export default function Routes() {

    return (
        <div className='content-wrapper'>
            <Switch>
                <Route path='/' component={Dashboard} exact />
                <Route path="/cadastro" component={CadastroAssistido} />
                <Route path="/pesquisa" component={ListagemAssistidos} />
                <Route path="/aniversariantes" component={ListagemAniversariantes} />
                <Route path="/frequencia" component={FrequenciaAssistidos} />
                <Route path="/editar/:codigo" component={EditarAssistido} />
                <Redirect from='*' to='/' />
            </Switch>
        </div>
    )
}