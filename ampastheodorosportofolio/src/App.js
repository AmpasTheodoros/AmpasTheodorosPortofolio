import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Experiences from "./Experiences";
import Blog from "./Blog";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/AmpasTheodorosPortofolio" element={<Home />} />
          <Route path="/AmpasTheodorosPortofolio/experiences" element={<Experiences />} />
          <Route path="/AmpasTheodorosPortofolio/blog" element={<Blog />} />
          <Route path="/AmpasTheodorosPortofolio/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;