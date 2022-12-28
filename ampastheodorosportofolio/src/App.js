import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Experiences from "./pages/Experiences/Experiences";
import Blog from "./pages/Blog/BlogSection";

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