import React, { useState } from 'react';
import { createFichaClinica, updateFichaClinica } from '../services/fichasClinicasService';

const FichaClinicaForm = ({ existingFicha, onFormSubmit }) => {
  const [formData, setFormData] = useState(
    existingFicha || { patientId: '', doctorId: '', diagnosis: '', treatment: '', appointmentDate: '' }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.id) {
        await updateFichaClinica(formData.id, formData);
      } else {
        await createFichaClinica(formData);
      }
      onFormSubmit(); // Notificar al componente padre que se actualizó la lista
    } catch (error) {
      console.error('Error saving ficha clínica:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Paciente ID:</label>
        <input name="patientId" value={formData.patientId} onChange={handleChange} required />
      </div>
      <div>
        <label>Médico ID:</label>
        <input name="doctorId" value={formData.doctorId} onChange={handleChange} required />
      </div>
      <div>
        <label>Diagnóstico:</label>
        <input name="diagnosis" value={formData.diagnosis} onChange={handleChange} required />
      </div>
      <div>
        <label>Tratamiento:</label>
        <input name="treatment" value={formData.treatment} onChange={handleChange} />
      </div>
      <div>
        <label>Fecha de Cita:</label>
        <input name="appointmentDate" type="date" value={formData.appointmentDate} onChange={handleChange} />
      </div>
      <button type="submit">{formData.id ? 'Actualizar' : 'Crear'}</button>
    </form>
  );
};

export default FichaClinicaForm;
