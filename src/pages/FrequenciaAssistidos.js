import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Switch from "react-switch";
import ContentHeader from './common/template/contentHeader';
import Content from './common/template/content';


export default function FrequenciaAssistidos() {
    const [frequencias, setFrequencias] = useState([]);
    const [ponto, setPonto] = useState(0);
    const [dataDistribuicao, setDataDistribuicao] = useState(new Date().toISOString().substring(0, 10));

    useEffect(() => {
        async function loadAssistidos() {
            const response = await api.get(`/frequencias/ponto/${ponto}/dataDistribuicao/${dataDistribuicao}`);
            setFrequencias(response.data);
        }
        if (ponto !== 0) {
            loadAssistidos();
        }
        return () => setFrequencias([])
    }, [ponto, dataDistribuicao]);

    async function handleSalvarFrequencia(e) {
        const response = await api.post("/frequencias", frequencias);
        if (response.status === 201) {
            setFrequencias([]);
            setPonto(0);
        }
    }

    return (
        <>
            <ContentHeader title="Assistidos" small="frequência" />
            <Content>
                <form>
                    <div className="row">
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

                        <div className="form-group col-sm-3">
                            <label className="control-label" htmlFor="dataNascimento">Data</label>
                            <input type="date" id="dataDistribuicao"
                                value={dataDistribuicao}
                                className="form-control"
                                pattern="dd/MM/yyyy"
                                onChange={e => setDataDistribuicao(e.target.value)} />
                        </div>
                    </div>
                </form>

                <table className="table table-stripped" >
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Presente?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {frequencias.map((frequencia, key) => (
                            <tr key={key}>
                                <td>{frequencia.assistido.nome}</td>
                                <td>
                                    <Switch onChange={e => {
                                        frequencias[key].presente = e;
                                    }} checked={frequencia.presente} />
                                </td>
                                <td className="hide">
                                    {frequencia.id}
                                </td>
                                <td className="hide">
                                    {frequencia.dataDistribuicao}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type="button" className="btn btn-primary" onClick={handleSalvarFrequencia}>Salvar</button>
            </Content>
        </>
    )
}