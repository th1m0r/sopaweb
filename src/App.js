import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './pages/common/template/custom.css'
import Header from './pages/common/template/header';
import SideBar from './pages/common/template/sideBar';
import Footer from './pages/common/template/footer';

import CadastroAssistido from './pages/CadastroAssistido'
import ListagemAssistidos from './pages/ListagemAssistidos'
import ListagemAniversariantes from './pages/ListagemAniversariantes'
import FrequenciaAssistidos from './pages/FrequenciaAssistidos'
import Dashboard from './pages/dashboard/dashboard'
import EditarAssistido from './pages/EditarAssistido'

export default function App(props) {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <SideBar />
        <div className='content-wrapper'>
          <Switch>
            <Route path='/' component={Dashboard} exact />
            <Route path="/cadastro" component={CadastroAssistido} />
            <Route path="/pesquisa" component={ListagemAssistidos} />
            <Route path="/aniversariantes" component={ListagemAniversariantes} />
            <Route path="/frequencia" component={FrequenciaAssistidos} />
            <Route path="/editar/:codigo" component={EditarAssistido} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
