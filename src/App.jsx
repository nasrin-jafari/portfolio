import React from "react";
import "./App.scss";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Routes, Route , useLocation } from "react-router-dom";
import { Home, About, Skills, Portfolio, Resume, Contact } from "./containers";
import { NavBar } from "./components";
import particles from "./utils/particles";

const App = () => {
  const location = useLocation();

  const handleInit = async (main) => {
    await loadFull(main);
  };
  const renderParticleJsInHomePage = location.pathname === "/";
  return (
    <div className="App">
      {/* particles js */}

      {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

      {/* navbar */}
      <NavBar/>

      {/* main page content */}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
