import React, { useState } from 'react';
import FichaClinicaForm from './FichaClinicaForm';
import FichasClinicasList from './FichasClinicasList';
import { createFichaClinica } from '../services/fichasClinicasService';

const FichasClinicasPage = () => {
  const [reload, setReload] = useState(false);
  const [message, setMessage] = useState('');
  const [filters, setFilters] = useState({}); // Estado para filtros de búsqueda

  const handleFormSubmit = async (newFicha) => {
    try {
      await createFichaClinica(newFicha);
      setMessage('Ficha clínica creada con éxito.');
      setReload(!reload);
    } catch (err) {
      setMessage('Error al crear la ficha clínica. Inténtalo nuevamente.');
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <h1>Gestión de Fichas Clínicas</h1>
      {message && <div className="alert">{message}</div>}
      <FichaClinicaForm onFormSubmit={handleFormSubmit} />
      <FichasClinicasList filters={filters} reload={reload} />
    </div>
  );
};

export default FichasClinicasPage;
