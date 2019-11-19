import React, { useState, useEffect } from 'react';
import api from '../services/api';

import ContentHeader from './common/template/contentHeader';
import Content from './common/template/content';
import Row from './common/layout/row'
import Grid from './common/layout/grid.js'

export default function ConsultarFrequencia({ history, match }) {
    const [assistido, setAssistido] = useState({})
    const [frequencias, setFrequencias] = useState([])

    useEffect(() => {
        async function loadAssistido() {
            const response = await api.get(`/assistidos/${match.params.codigo}`)
            setAssistido(response.data)
        }
        async function loadFrequencia() {
            const response = await api.get(`/frequencias/assistido/${match.params.codigo}`);
            setFrequencias(response.data)
        }
        loadAssistido();
        loadFrequencia()
    }, [match.params.codigo]);


    return (
        <>
            <Row>
                <Grid cols="10 4">
                    <ContentHeader title="Assistidos" small="lista frequencias" />
                </Grid>
                <Grid cols="2 2">
                    <button className="btn btn-primary pull-right" title="Voltar"
                        style={{marginTop: 10}}
                        onClick={() => history.goBack()}>
                        <i className='fa fa-reply'></i>
                    </button>
                </Grid>
            </Row>
            <Content>
                <Row>
                    <Grid cols="12 2">
                        <div className="form-group">
                            <label className="control-label">Código</label>
                            <label className="form-control">{assistido.id}</label>
                        </div>
                    </Grid>
                    <Grid cols="12 6">
                        <div className="form-group">
                            <label className="control-label">Nome</label>
                            <label className="form-control">{assistido.nome}</label>
                        </div>
                    </Grid>
                </Row>
                <Row>
                    <Grid cols="12 6">
                        <table className="table table-stripped" >
                            <thead>
                                <tr>
                                    <th style={{ width: 50 }}>Data</th>
                                    <th style={{ width: 50 }}>Presente?</th>
                                </tr>
                            </thead>
                            <tbody>
                                {frequencias.map((frequencia, key) => (
                                    <tr key={key}>
                                        <td>{frequencia.dataDistribuicao}</td>
                                        <td>{frequencia.presente ? 'SIM' : 'NÃO'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Grid>
                </Row>
            </Content>
        </>
    )
}