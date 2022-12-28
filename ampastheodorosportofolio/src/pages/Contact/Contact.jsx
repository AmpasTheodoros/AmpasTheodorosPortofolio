import React, { useState } from 'react';
import Button from '../../components/Navbar/Button.js';
import Navbar from '../../components/Navbar/Navbar.js';

function Work() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
      setNavOpen(!navOpen);
  }

  return (
    <div >
      <body data-nav={navOpen}>
        <main>
          <h1 class="font-weight-light">Contact</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </main>
        <Navbar />
        <Button toggleNav={toggleNav} />
      </body>
    </div>
  );
}

export default Work;