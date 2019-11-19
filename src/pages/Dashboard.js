import React, { useState, useEffect } from 'react'

import ContentHeader from './common/template/contentHeader'
import Content from './common/template/content'
import Row from './common/layout/row'
import api from '../services/api';

export default function Dashboard({ history }) {
    const [dashboard, setDashboard] = useState({});
    useEffect(() => {
        async function loadDashboard() {
            const response = await api.get('/dashboard');
            setDashboard(response.data);
        }
        loadDashboard();
    }, []);

    return (
        <>
            <ContentHeader title="Dashboard" />
            <Content>
                <Row>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="info-box">
                            <span className="info-box-icon bg-red"><i className="ion ion-ios-people-outline" /></span>
                            <div className="info-box-content">
                                <span className="info-box-text">Assistidos</span>
                                <span className="info-box-number">{dashboard.numeroAssistidos}</span>
                            </div>
                            {/* /.info-box-content */}
                        </div>
                        {/* /.info-box */}
                    </div>
                    {/* /.col */}
                    {/* fix for small devices only */}
                    <div className="clearfix visible-sm-block" />
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="info-box">
                            <span className="info-box-icon bg-blue"><i className="ion ion-checkmark-circled" /></span>
                            <div className="info-box-content">
                                <span className="info-box-text">Cadastrados</span>
                                <span className="info-box-number">{dashboard.cadastrados}</span>
                            </div>
                            {/* /.info-box-content */}
                        </div>
                        {/* /.info-box */}
                    </div>
                    {/* /.col */}
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="info-box">
                            <span className="info-box-icon bg-yellow"><i className="ion ion-ios-filing-outline" /></span>
                            <div className="info-box-content">
                                <span className="info-box-text">Não Cadastrados</span>
                                <span className="info-box-number">{dashboard.naoCadastrados}</span>
                            </div>
                            {/* /.info-box-content */}
                        </div>
                        {/* /.info-box */}
                    </div>
                    {/* /.col */}
                    {/* fix for small devices only */}
                    <div className="clearfix visible-sm-block" />
                    <div className="col-md-4 col-sm-6 col-xs-12" onClick={() => history.push('/listagemAptos')}>
                        <div className="info-box">
                            <span className="info-box-icon bg-aqua"><i className="ion ion-person-add" /></span>
                            <div className="info-box-content">
                                <span className="info-box-text">Aptos</span>
                                <span className="info-box-number">{dashboard.aptos}</span>
                            </div>
                            {/* /.info-box-content */}
                        </div>
                        {/* /.info-box */}
                    </div>
                    {/* /.col */}
                        <div className="col-md-4 col-sm-6 col-xs-12" onClick={() => history.push('/aniversariantes')}>
                            <div className="info-box">
                                <span className="info-box-icon bg-green"><i className="fa fa-birthday-cake" /></span>
                                <div className="info-box-content">
                                    <span className="info-box-text">Aniversariantes</span>
                                    <span className="info-box-number">{dashboard.aniversariantes}</span>
                                </div>
                                {/* /.info-box-content */}
                            </div>
                            {/* /.info-box */}
                        </div>
                     {/* /.col */}
                </Row>
            </Content>
        </>
    )
}