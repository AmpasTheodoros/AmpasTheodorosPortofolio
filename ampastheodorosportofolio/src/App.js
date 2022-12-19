import React, { useState } from 'react';
import Button from './components/Navbar/Button';
import Navbar from './components/Navbar/Navbar.js';
import Wrapper from './components/Wrapper/Wrapper';
import './App.css';

function App() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  }

  return (
    <div className="App">
      <body data-nav={navOpen}>
        <main>
          <Wrapper />
        </main>
        <Navbar />
        <Button toggleNav={toggleNav} />
      </body>
    </div>
  );
}

export default App;