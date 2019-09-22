import React from 'react';
import { Link } from 'react-router-dom';
import './Cabecalho';

import logo from '../imagens/logo.png';

export default function Cabecalho() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

            <Link className="navbar-brand" to="/main">
                <span>Sopa APP</span>
            </Link>
            <button className="navbarr-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li>CADASTRO</li>
                    <li>PESQUISA</li>
                    <li>ANIVERSARIANTES</li>
                    <li>FREQUENCIA</li>
                </ul>
            </div>
        </nav >
    )
}