import React, { useEffect, useState } from 'react';
import { getFichasClinicas, deleteFichaClinica } from '../services/fichasClinicasService';

const FichasClinicasList = () => {
  const [fichas, setFichas] = useState([]);

  useEffect(() => {
    loadFichasClinicas();
  }, []);

  const loadFichasClinicas = async () => {
    try {
      const data = await getFichasClinicas();
      setFichas(data);
    } catch (error) {
      console.error('Error loading fichas clínicas:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteFichaClinica(id);
      loadFichasClinicas(); 
    } catch (error) {
      console.error('Error deleting ficha clínica:', error);
    }
  };

  return (
    <div>
      <h1>Fichas Clínicas</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Paciente</th>
            <th>Médico</th>
            <th>Diagnóstico</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {fichas.map((ficha) => (
            <tr key={ficha.id}>
              <td>{ficha.id}</td>
              <td>{ficha.patient.name}</td>
              <td>{ficha.doctor.name}</td>
              <td>{ficha.diagnosis}</td>
              <td>
                <button onClick={() => handleDelete(ficha.id)}>Eliminar</button>
                {/* Aquí puedes agregar botones para editar */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FichasClinicasList;
