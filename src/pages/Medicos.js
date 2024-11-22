import React, { useState, useEffect } from "react";
import { getMedicos, createMedico } from "../services/medicosService";

const Medicos = () => {
  const [medicos, setMedicos] = useState([]);
  const [nuevoMedico, setNuevoMedico] = useState({ nombre: "", especialidad: "" });

  
  useEffect(() => {
    const fetchMedicos = async () => {
      try {
        const data = await getMedicos();
        setMedicos(data);
      } catch (error) {
        console.error("Error al cargar los médicos:", error);
      }
    };
    fetchMedicos();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoMedico({ ...nuevoMedico, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const medicoCreado = await createMedico(nuevoMedico);
      setMedicos([...medicos, medicoCreado]); 
      setNuevoMedico({ nombre: "", especialidad: "" }); 
    } catch (error) {
      console.error("Error al agregar el médico:", error);
    }
  };

  return (
    <div>
      <h1>Gestión de Médicos</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del Médico"
          value={nuevoMedico.nombre}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="especialidad"
          placeholder="Especialidad"
          value={nuevoMedico.especialidad}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Agregar Médico</button>
      </form>

      <h2>Lista de Médicos</h2>
      <ul>
        {medicos.map((medico) => (
          <li key={medico.id}>
            {medico.nombre} - {medico.especialidad}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Medicos;
