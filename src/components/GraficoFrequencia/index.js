import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'

export default function GraficoFrequencia() {

    const [resumoMensal, setResumoMensal] = useState({
        labels: ['05-12-2019', '12-12-2019','19-12-2019', '26-12-2019'],
        datasets: [
            {
                label: 'Ponto 1',
                backgroundColor: 'rgba(60,141,188,0.9)',
                borderColor: 'rgba(60,141,188,0.8)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(60,141,188,0.4)',
                hoverBorderColor: 'rgba(60,141,188,1)',
                data: [31,39,0,0]
            },
            {
                label: 'Ponto 2',
                backgroundColor: 'rgba(21, 214, 90, 1)',
                borderColor: 'rgba(21, 214, 90, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(21,220,90,0.4)',
                hoverBorderColor: 'rgba(21,220,19,1)',
                data: [40,29,0,0]
            },
            {
                label: 'Ponto 3',
                backgroundColor: 'rgba(230, 130, 92, 1)',
                borderColor: 'rgba(230, 130, 92, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(230,130,92,0.4)',
                hoverBorderColor: 'rgba(230,130,92,1)',
                data: [15,24,0,0]
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
                        <Bar
                            data={resumoMensal}
                            height={230}
                            width={230}
                            options={{
                                maintainAspectRatio: false,
                                dataset: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }],                              
                                    barPercentage: 0.9
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}