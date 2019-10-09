import React from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'

export default function dashboard() {
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
                                <span className="info-box-number">532</span>
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
                            <span className="info-box-icon bg-green"><i className="fa fa-birthday-cake" /></span>
                            <div className="info-box-content">
                                <span className="info-box-text">Aniversariantes</span>
                                <span className="info-box-number">23</span>
                            </div>
                            {/* /.info-box-content */}
                        </div>
                        {/* /.info-box */}
                    </div>
                    {/* /.col */}
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="info-box">
                            <span className="info-box-icon bg-yellow"><i className="ion ion-person-add" /></span>
                            <div className="info-box-content">
                                <span className="info-box-text">Aptos</span>
                                <span className="info-box-number">10</span>
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