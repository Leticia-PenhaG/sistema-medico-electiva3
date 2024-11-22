import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pacientes from "./pages/Pacientes";
import Medicos from "./pages/Medicos";
import FichasClinicas from "./pages/FichasClinicas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Bienvenido al Sistema Médico</h1>} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/medicos" element={<Medicos />} />
        <Route path="/fichas-clinicas" element={<FichasClinicas />} />
      </Routes>
    </Router>
  );
}

export default App;
/*
document.getElementById('paciente-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  // Obtener los datos del formulario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const cedula = document.getElementById('cedula').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const fecha_nacimiento = document.getElementById('fecha_nacimiento').value;

  // Crear el objeto con los datos
  const pacienteData = {
      nombre,
      apellido,
      cedula,
      email,
      telefono,
      fecha_nacimiento
  };

  try {
      // Enviar los datos al back-end usando fetch
      const response = await fetch('http://localhost:3000/pacientes', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(pacienteData)
      });

      if (!response.ok) {
          throw new Error('Error al registrar paciente');
      }

      const data = await response.json();
      console.log('Paciente creado:', data);
      alert('Paciente creado con éxito');
  } catch (error) {
      console.error('Error:', error);
      alert('Error al crear paciente');
  }
});*/

