import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Section from "./components/Section";
import Box from "./components/Box";
import Portfolio from "./components/Portfolio";
import Contato from "./components/Contato";
import Map from "./components/Map";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      {/* Componentes exibidos por padrão */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Section />
              <Box />
              <Portfolio />
              <Contato />
              <Map />
            </>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
