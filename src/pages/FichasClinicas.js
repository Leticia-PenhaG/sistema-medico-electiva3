import React, { useState, useEffect } from "react";
import { getFichasClinicas, createFichaClinica } from "../services/fichasClinicasService";

const FichasClinicas = () => {
  const [fichas, setFichas] = useState([]);
  const [nuevaFicha, setNuevaFicha] = useState({
    paciente: "",
    medico: "",
    diagnostico: "",
  });

  useEffect(() => {
    const fetchFichas = async () => {
      try {
        const data = await getFichasClinicas();
        setFichas(data);
      } catch (error) {
        console.error("Error al cargar las fichas clínicas:", error);
      }
    };
    fetchFichas();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevaFicha({ ...nuevaFicha, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fichaCreada = await createFichaClinica(nuevaFicha);
      setFichas([...fichas, fichaCreada]); 
      setNuevaFicha({ paciente: "", medico: "", diagnostico: "" }); 
    } catch (error) {
      console.error("Error al agregar la ficha clínica:", error);
    }
  };

  return (
    <div>
      <h1>Gestión de Fichas Clínicas</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="paciente"
          placeholder="Nombre del Paciente"
          value={nuevaFicha.paciente}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="medico"
          placeholder="Nombre del Médico"
          value={nuevaFicha.medico}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="diagnostico"
          placeholder="Diagnóstico"
          value={nuevaFicha.diagnostico}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Agregar Ficha Clínica</button>
      </form>

      <h2>Lista de Fichas Clínicas</h2>
      <ul>
        {fichas.map((ficha) => (
          <li key={ficha.id}>
            Paciente: {ficha.paciente}, Médico: {ficha.medico}, Diagnóstico: {ficha.diagnostico}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FichasClinicas;
