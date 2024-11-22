import React, { useEffect, useState } from 'react';
import { searchFichasClinicas } from '../services/fichasClinicasService';

const FichasClinicasList = ({ filters }) => {
  const [fichas, setFichas] = useState([]);

  useEffect(() => {
    const fetchFichas = async () => {
      try {
        const data = await searchFichasClinicas(filters);
        setFichas(data);
      } catch (error) {
        console.error('Error fetching clinical records:', error);
      }
    };
    fetchFichas();
  }, [filters]);

  return (
    <div>
      <h2>Lista de Fichas Clínicas</h2>
      <ul>
        {fichas.map((ficha) => (
          <li key={ficha.id}>
            {`Paciente ID: ${ficha.paciente_id}, Médico ID: ${ficha.doctor_id}, Diagnóstico: ${ficha.diagnostico}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FichasClinicasList;
