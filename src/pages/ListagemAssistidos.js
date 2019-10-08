import React, { useState, useEffect } from 'react';
import api from '../services/api';


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
        loadAssistidos();
    }, [nome, ponto, situacao]);

    function handleEditarAssistido(codigo) {
        history.push(`/editar/${codigo}`);
    }

    async function handleExcluirAssistido(codigo) {
        const response = await api.delete(`/assistidos/${codigo}`);
        if (response.status === 204) {
            setAssistidos(assistidos.filter(a => a.id !== codigo))
        }
    }

    return (
        <>
            <div className="page-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-10">
                            <h2>Pesquisa Assistidos</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <form>
                    <div className="row">
                        <div className="form-group col-sm-4">
                            <label className="control-label" htmlFor="nome">Nome</label>
                            <input id="nome"
                                autoComplete="off"
                                type="text" className="form-control"
                                placeholder="Digite o nome do assistido"
                                value={nome}
                                onChange={e => setNome(e.target.value)} />
                        </div>
                        <div className="form-group col-sm-2">
                            <label className="control-label" htmlFor="ponto">Ponto</label>
                            <select id="ponto" className="form-control"
                                value={ponto}
                                onChange={e => setPonto(e.target.value)} >
                                <option value="0">Selecione ...</option>
                                <option value="1">Ponto 1</option>
                                <option value="2">Ponto 2</option>
                                <option value="3">Ponto 3</option>
                            </select>
                        </div>
                        <div className="form-group col-sm-2">
                            <label className="control-label" htmlFor="situacao">Situção</label>
                            <select id="situacao" className="form-control"
                                value={situacao}
                                onChange={e => setSituacao(e.target.value)}>
                                <option value="0">Selecione ...</option>
                                <option value="C">Cadastrado</option>
                                <option value="A">Apto</option>
                                <option value="N">Não Cadastrado</option>
                            </select>
                        </div>
                    </div>
                </form>
                <div className="table-responsive">
                    <table className="table table-stripped">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Ponto</th>
                                <th>Situação</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assistidos.map(usuario => (
                                <tr key={usuario.id}>
                                    <td>{usuario.nome}</td>
                                    <td>{usuario.ponto.nome}</td>
                                    <td>{usuario.situacao === 'A' ? 'APTO' : usuario.situacao === 'N' ? 'NÃO CADASTRADO' : 'CADASTRADO'}</td>
                                    <td>
                                        <button type="button"
                                            className="btn btn-primary"
                                            onClick={() => handleEditarAssistido(usuario.id)}>Editar</button>&nbsp;&nbsp;
                                        <button type="button"
                                            className="btn btn-primary"
                                            onClick={() => handleExcluirAssistido(usuario.id)}>Excluir</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}