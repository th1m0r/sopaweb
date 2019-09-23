import React, { useState } from 'react';
import './CadastroAssistido';
import api from '../services/api';


export default function CadastroAssistido() {

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
        <div className="container-fluid">
            <div className="page-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-10">
                            <h2>Cadastro de Assistidos</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-cadastro">
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
                            <option value="1">Catedral</option>
                            <option value="2">Praça da mão</option>
                            <option value="3">Alecrim</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="control-label" htmlFor="situacao">Situção</label>
                        <select id="situacao" className="form-control"
                            value={assistido.situacao}
                            onChange={e => setAssistido({ ...assistido, situacao: e.target.value })}>
                            <option value="N">Não Cadastrado</option>
                            <option value="A">Apto</option>
                            <option value="C">Cadastrado</option>
                        </select>
                    </div>
                    <button className="btn btn-primary pull-right" type="submit">Salvar</button>
                </form>
            </div>
        </div >
    )


}