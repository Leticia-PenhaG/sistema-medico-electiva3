import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pacientes from "./pages/Pacientes";
import Medicos from "./pages/Medicos";
import FichasClinicas from "./pages/FichasClinicas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/medicos" element={<Medicos />} />
        <Route path="/fichas-clinicas" element={<FichasClinicas />} />
      </Routes>
    </Router>
  );
}

export default App;
