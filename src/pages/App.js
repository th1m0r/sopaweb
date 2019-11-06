import './common/template/dependencies'
import React from 'react';
import { HashRouter } from 'react-router-dom';

import Header from './common/template/header';
import SideBar from './common/template/sideBar';
import Footer from './common/template/footer';

import Routes from '../routes';

export default function App() {
  return (
    <HashRouter>
        <Header />
        <SideBar />
        <Routes />
        <Footer />
    </HashRouter>
  )
}
