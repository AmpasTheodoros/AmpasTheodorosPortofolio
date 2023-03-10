import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";

const Footer = () => (
    <div className='footer container'>
        <p>&#169; Ampas Theodoros All Right Reserved</p>
        <div className="social">
            <a href="https://www.facebook.com/Theodoros.Ampas"><i class="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="https://twitter.com/AmpasThodoris"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            <a href="https://github.com/AmpasTheodoros"><i class="fa fa-github" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/theodor_amp__/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/theodoros-ampas-72a517203/"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
        </div>
    </div>
);

export default Footer;