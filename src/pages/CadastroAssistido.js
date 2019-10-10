import React, { useState } from 'react';
import api from '../services/api';

import ContentHeader from './common/template/contentHeader';
import Content from './common/template/content';
import Row from './common/layout/row';
import Grid from './common/layout/grid.js';
import DatePicker from 'react-datepicker';

export default function CadastroAssistido({ history }) {

    const [assistido, setAssistido] = useState({
        id: '',
        nome: '',
        dataNascimento: '',
        ponto: { id: 0, nome: '' },
        situacao: 'N'
    });

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await api.post("/assistidos", assistido);
        if (response.status === 201) {
            setAssistido({
                id: '',
                nome: '',
                dataNascimento: '',
                ponto: { id: 0, nome: '' },
                situacao: 'N'
            });
        }
    }


    return (
        <>
            <ContentHeader title="Assistidos" small="cadastro" />
            <Content>
                <Row>
                    <Grid cols="12 6">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="control-label" htmlFor="codigo">Código</label>
                                <input id="codigo"
                                    type="text" className="form-control"
                                    readOnly
                                    value={assistido.id}
                                    onChange={e => setAssistido({ ...assistido, id: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label className="control-label" htmlFor="nome">Nome</label>
                                <input id="nome"
                                    autoComplete="off"
                                    type="text" className="form-control"
                                    placeholder="Digite o nome do assistido"
                                    value={assistido.nome}
                                    onChange={e => setAssistido({ ...assistido, nome: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label className="control-label" htmlFor="dataNascimento">Data nascimento</label>
                                <input id="dataNascimento"
                                    type="date" className="form-control"
                                    placeholder="Informe data de nascimento"
                                    value={assistido.dataNascimento}
                                    onChange={e => setAssistido({ ...assistido, dataNascimento: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label className="control-label" htmlFor="ponto">Ponto</label>
                                <select id="ponto" className="form-control"
                                    value={assistido.ponto.id}
                                    onChange={e => setAssistido({ ...assistido, ponto: { id: e.target.value } })} >
                                    <option value="0">Selectione o ponto</option>
                                    <option value="1">Ponto 1</option>
                                    <option value="2">Ponto 2</option>
                                    <option value="3">Ponto 3</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="control-label" htmlFor="situacao">Situação</label>
                                <select id="situacao" className="form-control"
                                    value={assistido.situacao}
                                    onChange={e => setAssistido({ ...assistido, situacao: e.target.value })}>
                                    <option value="C">Cadastrado</option>
                                    <option value="A">Apto</option>
                                    <option value="N">Não Cadastrado</option>
                                </select>
                            </div>
                            <button className="btn btn-primary pull-right" type="button" onClick={() => history.push("/pesquisa")}>Cancelar</button>
                            <button className="btn btn-primary pull-right" type="submit">Salvar</button>
                        </form>
                    </Grid>
                </Row>
            </Content>
        </>
    )
}