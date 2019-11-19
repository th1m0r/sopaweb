import React, { useState, useEffect } from 'react';

import api from '../services/api';

import ContentHeader from './common/template/contentHeader';
import Content from './common/template/content';


export default function PesquisaAssitido({ history }) {
    const [assistidos, setAssistidos] = useState([]);

    useEffect(() => {
        async function loadAssistidos() {
            const response = await api.get('/assistidos/aptos');
            setAssistidos(response.data);
        }
        loadAssistidos();
        return () => setAssistidos([])
    }, []);

    async function handleEfetuarCadastro(codigo) {
        const response = await api.put(`/assistidos/cadastrar/${codigo}`);
        if (response.status === 204) {
            setAssistidos(assistidos.filter(a => a.id !== codigo))
        }
    }

    return (
        <>
            <ContentHeader title="Assistidos aptos" small="efetuar cadastro" />
            <Content>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Ponto</th>
                            <th className="table-actions">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assistidos.map(usuario => (
                            <tr key={usuario.id}>
                                <td>{usuario.nome}</td>
                                <td className="text-center">{usuario.ponto.id}</td>
                                <td className="text-center">
                                    <button type="button"
                                        className="btn btn-xs btn-success"
                                        onClick={() => handleEfetuarCadastro(usuario.id)}>
                                        <i className="fa fa-check"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {assistidos.length===0 && <tr><td colSpan="3">Sem assistidos aptos para cadastro</td></tr>}
                    </tbody>
                </table>
            </Content>
        </>
    )
}