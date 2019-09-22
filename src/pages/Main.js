import React from 'react';

import Rodape from './Rodape';
import Cabecalho from './Cabecalho';

export default function Main() {
    return (
        <div className="aw-layout-page">
            <Cabecalho />

            <div className="aw-layout-content">
                <h1>Pagina principal</h1>
            </div>

            <Rodape />
        </div>
    )

}