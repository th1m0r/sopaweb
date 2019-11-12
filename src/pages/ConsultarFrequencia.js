import React, { useState, useEffect } from 'react';
import api from '../services/api';

import ContentHeader from './common/template/contentHeader';
import Content from './common/template/content';
import Row from './common/layout/row'
import Grid from './common/layout/grid.js'

export default function ConsultarFrequencia({ match }) {
    const [assistido, setAssistido] = useState({ frequencias: [] });

    useEffect(() => {
        async function loadFrequencia() {
            const response = await api.get(`/frequencias/assistido/${match.params.codigo}`);
            setAssistido(response.data);
        }
        loadFrequencia()
    }, [match.params.codigo]);


    return (
        <>
            <ContentHeader title="Assistidos" small="lista frequencias" />
            <Content>
                <Row>
                    <Grid cols="12 3">
                        <div className="form-group">
                            <label className="control-label">Código</label>
                            <label className="form-control">{assistido.id}</label>
                        </div>
                    </Grid>
                    <Grid cols="12 3">
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
                                {assistido.frequencias.map((frequencia, key) => (
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