import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Switch from "react-switch";


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
        <div className="container-fluid">
            <div className="page-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-10">
                            <h2>Frequência dos assistidos</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <form>
                    <div className="row">
                        <div className="form-group col-sm-2">
                            <label className="control-label" htmlFor="ponto">Ponto</label>
                            <select id="ponto" className="form-control"
                                value={ponto}
                                onChange={e => setPonto(e.target.value)} >
                                <option value="0">Selecione ...</option>
                                <option value="1">Catedral</option>
                                <option value="2">Praça da mão</option>
                                <option value="3">Alecrim</option>
                            </select>
                        </div>
                    </div>
                </form>
                <div className="table-responsive">
                    <table className="table table-stripped">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Nome</th>
                                <th>Presente?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {frequencias.map((frequencia, key) => (
                                <tr key={key}>
                                    <td>{frequencia.assistido.id}</td>
                                    <td>{frequencia.assistido.nome}</td>

                                    <td>
                                        <Switch onChange={e => {
                                            console.log(e);
                                            frequencias[key].presente = e;

                                        }} checked={frequencia.presente} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSalvarFrequencia}>Salvar</button>
            </div>
        </div >
    )
}