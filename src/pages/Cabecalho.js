import React from 'react';
import { Link } from 'react-router-dom';
import './Cabecalho';

export default function Cabecalho() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/main">
                <span>Sopa APP</span>
            </Link>
            <button className="navbarr-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/cadastro" className="nav-link">Cadastro</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/pesquisa" className="nav-link">Pesquisa</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/frequencia" className="nav-link">Frequência</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/aniversariantes" className="nav-link">Aniversariantes</Link>
                    </li>
                </ul>
            </div>
        </nav >
    )
}