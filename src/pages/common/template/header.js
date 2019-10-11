import React from 'react';
import { Link } from 'react-router-dom'

//import logo from '../../../imagens/logo.png'
export default function Header() {


    return (
        <header className="main-header">
            {/* Logo */}
            <Link to="/" className="logo">
            {/*<img src={logo} className="user-circle" alt="Sopa" />*/}
                {/* mini logo for sidebar mini 50x50 pixels */}
                <span className="logo-mini"><b>S</b>opa</span>
                {/* logo for regular state and mobile devices */}
                <span className="logo-lg"><b>S</b>opa</span>
            </Link>
            {/* Header Navbar: style can be found in header.less */}
            <nav className="navbar navbar-static-top">
                {/* Sidebar toggle button*/}
                <a href="fake_url" className="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span className="sr-only">Toggle navigation</span>
                </a>
                {/* Navbar Right Menu */}
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        <li className="dropdown user user-menu">
                            <a href="fake_url" className="dropdown-toggle" data-toggle="dropdown">
                                <img src="http://lorempixel.com/160/160/abstract" className="user-image" alt="User" />
                                <span className="hidden-xs">Sopa</span>
                            </a>
                            <ul className="dropdown-menu">
                                {/* User image */}
                                <li className="user-header">
                                    <img src="http://lorempixel.com/160/160/abstract" className="img-circle" alt="User" />
                                    <p>
                                    Sopa - Sociedade de obreiros que partilham o Amor <small>Membro desde 2007</small>
                                    </p>
                                </li>
                                {/* Menu Body */}
                                <li className="user-body">

                                </li>
                                {/* Menu Footer*/}
                                <li className="user-footer">
                                    <div className="pull-right">
                                        <a href="fake_url" className="btn btn-default btn-flat">Sign out</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}