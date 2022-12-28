import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav >
                <div id="nav-links">
                    {MenuItems.map((item, index) =>{
                        return (
                            <a className={item.a_cName} href={item.url}>
                                <h2 className={item.h2_cName}>{item.title}</h2>
                                <img className={item.img_cName} src={item.img_url} alt='' />
                            </a>
                        )
                    })}
                </div>
            </nav>
        )
    }
}

export default Navbar;