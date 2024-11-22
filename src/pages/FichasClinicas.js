import React, { useEffect, useState } from 'react';
import { getFichasClinicas } from '../services/fichasClinicasService'; 

const FichasClinicas = () => {
  const [fichas, setFichas] = useState([]);

  useEffect(() => {
    const fetchFichas = async () => {
      try {
        const data = await getFichasClinicas();
        setFichas(data); 
      } catch (error) {
        console.error('Error al obtener las fichas clínicas:', error);
      }
    };

    fetchFichas(); 
  }, []); 

  return (
    <div>
      <h1>Gestión de Fichas Clínicas</h1>
      <ul>
        {fichas.map(ficha => (
          <li key={ficha.id}>
            {ficha.patient.name} - {ficha.doctor.name} - {ficha.diagnosis}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FichasClinicas;
