import './pages/common/template/dependencies';
import React from 'react';
import { HashRouter } from 'react-router-dom';

import Header from './pages/common/template/header';
import SideBar from './pages/common/template/sideBar';
import Footer from './pages/common/template/footer';

import Routes from './routes';

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
