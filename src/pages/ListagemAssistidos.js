import React, { useState, useEffect } from 'react';

import api from '../services/api';

import './ListagemAssistidos.css'
import ContentHeader from './common/template/contentHeader';
import Content from './common/template/content';
import Grid from './common/layout/grid.js'


export default function PesquisaAssitido({ history }) {
    const [assistidos, setAssistidos] = useState([]);
    const [ponto, setPonto] = useState('0');
    const [nome, setNome] = useState('');
    const [situacao, setSituacao] = useState('0');

    useEffect(() => {
        async function loadAssistidos() {
            const response = await api.get(`/assistidos?nome=${nome}&ponto=${ponto}&situacao=${situacao}`);
            setAssistidos(response.data);
        }
        (ponto !== '0' || (nome !== '' && nome.length > 4) || situacao !== '0') ? loadAssistidos() : setAssistidos([]);
        return () => setAssistidos([])
    }, [nome, ponto, situacao]);

    function handleEditarAssistido(codigo) {
        history.push(`/editar/${codigo}`);
    }

    function handleConsultarFrequencia(codigo) {
        history.push(`/consultarFrequencia/${codigo}`);
    }

    async function handleExcluirAssistido(codigo) {
        const response = await api.delete(`/assistidos/${codigo}`);
        if (response.status === 204) {
            setAssistidos(assistidos.filter(a => a.id !== codigo))
        }
    }

    return (
        <>
            <ContentHeader title="Listagem" small="assistidos" />
            <Content>
                <div className="container-fluid">
                    <form>
                        <div className="row">
                            <Grid cols="12 4" className="form-group">
                                <label className="control-label" htmlFor="nome">Nome</label>
                                <input id="nome"
                                    autoComplete="off"
                                    type="text" className="form-control"
                                    placeholder="Digite o nome do assistido"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)} />
                            </Grid>
                            <Grid cols="12 4" className="form-group">
                                <label className="control-label" htmlFor="ponto">Ponto</label>
                                <select id="ponto" className="form-control"
                                    value={ponto}
                                    onChange={e => setPonto(e.target.value)} >
                                    <option value="0">Selecione ...</option>
                                    <option value="1">Ponto 1</option>
                                    <option value="2">Ponto 2</option>
                                    <option value="3">Ponto 3</option>
                                </select>
                            </Grid>
                            <Grid cols="12 4" className="form-group">
                                <label className="control-label" htmlFor="situacao">Situção</label>
                                <select id="situacao" className="form-control"
                                    value={situacao}
                                    onChange={e => setSituacao(e.target.value)}>
                                    <option value="0">Selecione ...</option>
                                    <option value="C">Cadastrado</option>
                                    <option value="A">Apto</option>
                                    <option value="N">Não Cadastrado</option>
                                </select>
                            </Grid>
                        </div>
                    </form>
                    <div className="">
                        <table className="table table-stripped">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Ponto</th>
                                    <th>Situação</th>
                                    <th className="table-actions">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {assistidos.map(usuario => (
                                    <tr key={usuario.id}>
                                        <td data-label="Nome:">{usuario.nome}</td>
                                        <td data-label="Ponto:">{usuario.ponto.id}</td>
                                        <td data-label="Situação:">{usuario.situacao === 'A' ? 'APTO' : usuario.situacao === 'N' ? 'NÃO CADASTRADO' : 'CADASTRADO'}</td>
                                        <td className="text-left">
                                            <button type="button"
                                                className="btn btn-warning"
                                                onClick={() => handleEditarAssistido(usuario.id)}>
                                                <i className='fa fa-pencil'></i>
                                            </button>

                                            <button type="button"
                                                className="btn btn-danger"
                                                onClick={() => handleExcluirAssistido(usuario.id)}>
                                                <i className="fa fa-trash-o"></i>
                                            </button>

                                            <button type="button"
                                                className="btn btn-info"
                                                onClick={() => handleConsultarFrequencia(usuario.id)}>
                                                <i className='fa fa-calendar'></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Content>
        </>
    )
}