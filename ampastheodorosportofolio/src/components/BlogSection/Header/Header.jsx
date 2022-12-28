import React from 'react';
import './styles.css';

const Header = () => (
    <div>
        <header>
            <div className="nav container">
                <a href="/AmpasTheodorosPortofolio" className="logo">Theo<span>dor</span></a>
            </div>
        </header>
        <section className="home" id="home">
            <div className="home-text container">
                <h2 className="home-title">Co<span>de</span> and Cul<span>ture</span> wi<span>th</span> Theo<span>dor</span></h2>
                <span className="home-subtitle">Theodor's Journey through the World of Web Development and Beyond</span>
            </div>
        </section>
    </div>

);

export default Header;