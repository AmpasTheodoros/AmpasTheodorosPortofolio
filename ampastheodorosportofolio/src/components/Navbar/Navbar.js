import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from "react-router-dom";

import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav >
                <div id="nav-links">
                    {MenuItems.map((item, index) =>{
                        return (
                            <Link className={item.a_cName} to={item.url}>
                                <h2 className={item.h2_cName}>{item.title}</h2>
                                <img className={item.img_cName} src={item.img_url} alt='' />
                            </Link>
                        )
                    })}
                </div>
            </nav>
        )
    }
}

export default Navbar;