import React, { useState } from 'react';
import FichasClinicasList from './FichasClinicasList';
import FichaClinicaForm from './FichaClinicaForm';

const FichasClinicasPage = () => {
  const [reload, setReload] = useState(false);

  const handleFormSubmit = () => {
    setReload(!reload); 
  };

  return (
    <div>
      <FichaClinicaForm onFormSubmit={handleFormSubmit} />
      <FichasClinicasList reload={reload} />
    </div>
  );
};

export default FichasClinicasPage;
