import './pages/common/template/dependencies';
import React from 'react';
import Header from './pages/common/template/header';
import SideBar from './pages/common/template/sideBar';
import Footer from './pages/common/template/footer';

export default function App(props) {
  return (
    <div className='wrapper'>
      <Header />
      <SideBar />
      <div className='content-wrapper'>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
