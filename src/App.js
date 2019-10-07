import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Cabecalho from './pages/Cabecalho';
import CadastroAssistido from './pages/CadastroAssistido';
import PesquisaAssistido from './pages/PesquisaAssistido';
import Main from './pages/Main';
import Rodape from './pages/Rodape';
import Login from './Login';
import ListagemAniversariantes from './pages/ListagemAniversariantes';
import FrequenciaAssistidos from './pages/FrequenciaAssistidos';

function App() {
  return (
    <div className="aw-layout-page">
      <div className="container-fluid">
        <Cabecalho />
        <div className="row">
          <div className="col">
            <Switch>
              <Route path="/" component={Main} exact />
              <Route path="/login" component={Login} />
              <Route path="/cadastro" component={CadastroAssistido} />
              <Route path="/pesquisa" component={PesquisaAssistido} />
              <Route path="/aniversariantes" component={ListagemAniversariantes} />
              <Route path="/frequencia" component={FrequenciaAssistidos} />
            </Switch>
          </div>
        </div>
        <Rodape />
      </div>
    </div>
  )
  //  return (
  //    <Routes />
  // );
}

export default App;
