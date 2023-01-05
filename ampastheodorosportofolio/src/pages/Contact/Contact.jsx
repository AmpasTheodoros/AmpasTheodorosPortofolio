import React, { useState } from 'react';
import Button from '../../components/Home/Navbar/Button.js';
import Navbar from '../../components/Home/Navbar/Navbar.js';
import ToggleBar from '../../components/Contact/ToggleBar/ToggleBar';

import { Link } from 'react-router-dom';

function Work() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
      setNavOpen(!navOpen);
  } 

  return (
    <div className='HomeBody' data-nav={navOpen}>
      <main>
        <div className="nav container">
          <Link to="/AmpasTheodorosPortofolio" className="logo-home">Theo<span>dor</span></Link>
        </div>
        <ToggleBar />
      </main>
      <Navbar />
      <Button toggleNav={toggleNav} />
    </div>
  );
}

export default Work;