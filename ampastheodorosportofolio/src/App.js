import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Work from "./Work";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/AmpasTheodorosPortofolio" element={<Home />} />
          <Route path="/AmpasTheodorosPortofolio/work" element={<Work />} />
          <Route path="/AmpasTheodorosPortofolio/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;