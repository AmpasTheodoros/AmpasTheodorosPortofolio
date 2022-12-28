import React, { useState } from 'react';
import Button from '../../components/Navbar/Button.js';
import Navbar from '../../components/Navbar/Navbar.js';
import Wrapper from '../../components/Wrapper/Wrapper.js';

const Home = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    }

    return (
        <div className='HomeBody' data-nav={navOpen}>
            <main>
                <Wrapper />
            </main>
            <Navbar />
            <Button toggleNav={toggleNav} />
        </div>
    )
};

export default Home;