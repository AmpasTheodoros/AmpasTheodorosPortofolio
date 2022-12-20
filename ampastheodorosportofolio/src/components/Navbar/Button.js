import React from 'react';

const Button = ({ toggleNav }) => {
    return (
        <button id="nav-toggle" type="button" onClick={toggleNav} aria-label="Name">
            {/* <i class="open fa fa-bars" aria-hidden="true"></i> */}
            {/* <i class="open fa fa-chevron-up" aria-hidden="true"></i> */}
            <i class="open fa fa-align-left" aria-hidden="true"></i>
            <i class="close fa fa-times" aria-hidden="true"></i>
        </button>
    );
};

export default Button;