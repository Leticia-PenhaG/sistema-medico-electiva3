import React, { useState } from 'react';
import axios from 'axios';

const RegistrarPaciente = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [cedula, setCedula] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const pacienteData = {
      nombre,
      apellido,
      cedula,
      email,
      telefono,
      fecha_nacimiento: fechaNacimiento,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/pacientes', pacienteData);
      console.log('Paciente registrado:', response.data);
      // Aquí puedes limpiar el formulario o redirigir al usuario a otra página
    } catch (error) {
      console.error('Error al registrar paciente:', error);
    }
  };

  return (
    <div>
      <h2>Registrar Paciente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
          <label>Apellido</label>
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div>
          <label>Cédula</label>
          <input type="text" value={cedula} onChange={(e) => setCedula(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Teléfono</label>
          <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <div>
          <label>Fecha de Nacimiento</label>
          <input type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />
        </div>
        <button type="submit">Registrar Paciente</button>
      </form>
    </div>
  );
};

export default RegistrarPaciente;
