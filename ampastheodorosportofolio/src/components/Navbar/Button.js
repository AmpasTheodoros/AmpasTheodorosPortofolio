import React from 'react';

const Button = ({ toggleNav }) => {
    return (
        <button id="nav-toggle" type="button" onClick={toggleNav} aria-label="Name">
            <i class="open fa-light fa-bars-staggered"></i>
            <i class="close fa-light fa-xmark-large"></i>
        </button>
    );
};

export default Button;