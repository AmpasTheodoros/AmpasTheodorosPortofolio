import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";

const Header = () => (
    <div>
        <header>
            <div className="nav container">
                <Link to="/AmpasTheodorosPortofolio" className="logo">Theo<span>dor</span></Link>
            </div>
        </header>
    </div>

);

export default Header;