import React, { useState, useEffect } from 'react';
import api from '../services/api';
import ContentHeader from './common/template/contentHeader';
import Content from './common/template/content';
import moment from 'moment'

export default function ListagemAniversariantes() {
    const [assistidos, setAssistidos] = useState([]);
    const [mes, setMes] = useState(0);

    useEffect(() => {
        async function loadAssistidos() {
            const response = await api.get(`/aniversariantes?mes=${mes}`);
            setAssistidos(response.data);
        }
        loadAssistidos();
    }, [mes]);



    return (
        <div>
            <ContentHeader title="Assistido" small="aniversariantes" />
            <Content>


                <form>
                    <div className="row">
                        <div className="form-group col-sm-2">
                            <label className="control-label" htmlFor="mes">Mes</label>
                            <select id="mes" className="form-control"
                                value={mes}
                                onChange={e => setMes(e.target.value)} >
                                <option value="0">Selecione um mês</option>
                                <option value="1">JANEIRO</option>
                                <option value="2">FEVEREIRO</option>
                                <option value="3">MARÇO</option>
                                <option value="4">ABRIL</option>
                                <option value="5">MAIO</option>
                                <option value="6">JUNHO</option>
                                <option value="7">JULHO</option>
                                <option value="8">AGOSTO</option>
                                <option value="9">SETEMBRO</option>
                                <option value="10">OUTUBRO</option>
                                <option value="11">NOVEMBRO</option>
                                <option value="12">DEZEMBRO</option>
                            </select>
                        </div>
                    </div>
                </form>
                <div className="table-responsive">
                    <table className="table table-stripped" style={{marginBottom: 30}}>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Data Nascimento</th>
                                <th>Idade</th>
                                <th>Ponto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assistidos.map(usuario => (
                                <tr key={usuario.id}>
                                    <td>{usuario.nome}</td>
                                    <td>{moment(usuario.dataNascimento).format("DD/MM/YYYY")}</td>
                                    <td>{(moment(usuario.dataNascimento, "YYYYMMDD").fromNow().split(' '))[0]} anos</td>
                                    <td>{usuario.ponto.nome}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Content>
        </div>
    )
}