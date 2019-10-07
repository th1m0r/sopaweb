import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './include/bootstrap';

import Login from './Login';



ReactDOM.render(
    <BrowserRouter>
        <Login />
    </BrowserRouter>,
    document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));

