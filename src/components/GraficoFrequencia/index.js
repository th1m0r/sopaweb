import React, { useState } from 'react'
import { HorizontalBar, Bar } from 'react-chartjs-2'

export default function GraficoFrequencia() {

    const [resumoMensal, setResumoMensal] = useState({
        labels: ['07-11-2019', '14-11-2019'],
        datasets: [
            {
                label: 'Ponto 1',
                backgroundColor: 'rgba(60,141,188,0.9)',
                borderColor: 'rgba(60,141,188,0.8)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(60,141,188,0.4)',
                hoverBorderColor: 'rgba(60,141,188,1)',
                data: [14, 12]
            },
            {
                label: 'Ponto 2',
                backgroundColor: 'rgba(210, 214, 222, 1)',
                borderColor: 'rgba(210, 214, 222, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(220,220,220,0.4)',
                hoverBorderColor: 'rgba(220,220,220,1)',
                data: [31, 23]
            },
            {
                label: 'Ponto 3',
                backgroundColor: 'rgba(230, 130, 92, 1)',
                borderColor: 'rgba(230, 130, 92, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(230,130,92,0.4)',
                hoverBorderColor: 'rgba(230,130,92,1)',
                data: [12, 13]
            },
        ]
    })

    return (
        <>
            <div className="box box-success col-xs-12 col-sm-6" >
                <div className="box-header with-border">
                    <h3 className="box-title">Resumo da Frequencia</h3>
                    <div className="box-tools pull-right">
                        <button type="button" className="btn btn-box-tool" data-widget="collapse">
                            <i className="fa fa-minus" />
                        </button>
                        <button type="button" className="btn btn-box-tool" data-widget="remove">
                            <i className="fa fa-times" />
                        </button>
                    </div>
                </div>
                <div className="box-body">
                    <div className="chart">
                        <HorizontalBar
                            data={resumoMensal}
                            height={300}
                            options={{
                                barThickness: 3,
                                maintainAspectRatio: false,
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}