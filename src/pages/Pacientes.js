import React, { useEffect, useState } from "react";
import { getPacientes, createPaciente, deletePaciente } from "../services/pacientesService";

const Pacientes = () => {
  const [pacientes, setPacientes] = useState([]);
  const [nuevoPaciente, setNuevoPaciente] = useState({
    nombre: "",
    apellido: "",
    cedula: "",
    email: "",
    telefono: "",
    fechaNacimiento: "",
  });

  // Obtener pacientes al cargar el componente
  useEffect(() => {
    const fetchPacientes = async () => {
      try {
        const data = await getPacientes();
        setPacientes(data);
      } catch (error) {
        console.error("Error al obtener pacientes:", error);
      }
    };
    fetchPacientes();
  }, []);

  // Manejar el envío del formulario para agregar un nuevo paciente
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const pacienteCreado = await createPaciente(nuevoPaciente);
      setPacientes([...pacientes, pacienteCreado]); // Agregar el nuevo paciente a la lista
      setNuevoPaciente({ nombre: "", apellido: "", cedula: "", email: "", telefono: "", fechaNacimiento: "" }); // Limpiar formulario
    } catch (error) {
      console.error("Error al crear paciente:", error);
    }
  };

  // Manejar la eliminación de un paciente
  const handleDelete = async (id) => {
    try {
      await deletePaciente(id);
      setPacientes(pacientes.filter((paciente) => paciente.id !== id)); // Eliminar el paciente de la lista
    } catch (error) {
      console.error("Error al eliminar paciente:", error);
    }
  };

  return (
    <div>
      <h1>Gestión de Pacientes</h1>

      {/* Formulario para agregar pacientes */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nuevoPaciente.nombre}
          onChange={(e) => setNuevoPaciente({ ...nuevoPaciente, nombre: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Apellido"
          value={nuevoPaciente.apellido}
          onChange={(e) => setNuevoPaciente({ ...nuevoPaciente, apellido: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Cédula"
          value={nuevoPaciente.cedula}
          onChange={(e) => setNuevoPaciente({ ...nuevoPaciente, cedula: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={nuevoPaciente.email}
          onChange={(e) => setNuevoPaciente({ ...nuevoPaciente, email: e.target.value })}
          required
        />
        <input
          type="tel"
          placeholder="Teléfono"
          value={nuevoPaciente.telefono}
          onChange={(e) => setNuevoPaciente({ ...nuevoPaciente, telefono: e.target.value })}
          required
        />
        <input
          type="date"
          value={nuevoPaciente.fechaNacimiento}
          onChange={(e) => setNuevoPaciente({ ...nuevoPaciente, fechaNacimiento: e.target.value })}
          required
        />
        <button type="submit">Agregar Paciente</button>
      </form>

      {/* Lista de pacientes */}
      <ul>
        {pacientes.map((paciente) => (
          <li key={paciente.id}>
            {paciente.nombre} {paciente.apellido} - {paciente.cedula}
            <button onClick={() => handleDelete(paciente.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pacientes;
