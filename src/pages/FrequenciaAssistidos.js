import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Switch from "react-switch";
import ContentHeader from './common/template/contentHeader';
import Content from './common/template/content';


export default function FrequenciaAssistidos() {
    const [frequencias, setFrequencias] = useState([]);
    const [ponto, setPonto] = useState(0);

    useEffect(() => {
        async function loadAssistidos() {
            const response = await api.get(`/frequencias/${ponto}`);
            setFrequencias(response.data);
        }
        loadAssistidos();
    }, [ponto]);

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
                    </div>
                </form>
                <div className="table-responsive">
                    <table className="table table-stripped" style={{marginBottom: 20, width: 80}}>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Presente?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {frequencias.map((frequencia, key) => (
                                <tr key={key}>
                                    <td>{frequencia.assistido.nome.substring(0,20)}</td>
                                    <td>
                                        <Switch onChange={e => {
                                            frequencias[key].presente = e;
                                        }} checked={frequencia.presente} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSalvarFrequencia}>Salvar</button>
            </Content>
        </>
    )
}