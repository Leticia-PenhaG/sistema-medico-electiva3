import React, { useState } from 'react';
import { createFichaClinica, updateFichaClinica } from '../services/fichasClinicasService';

const FichaClinicaForm = ({ existingFicha, onFormSubmit }) => {
  const [formData, setFormData] = useState(
    existingFicha || {
      paciente_id: '',
      doctor_id: '',
      motivo_consulta: '',
      detalles_consulta: '',
      diagnostico: '',
      tratamiento: '',
      appointmentDate: '',
    }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.id) {
        await updateFichaClinica(formData.id, formData); // Editar
      } else {
        await createFichaClinica(formData); // Crear
      }
      onFormSubmit(); // Notifica al componente padre que se actualizó la lista
      setFormData({
        paciente_id: '',
        doctor_id: '',
        motivo_consulta: '',
        detalles_consulta: '',
        diagnostico: '',
        tratamiento: '',
        appointmentDate: '',
      });
    } catch (error) {
      console.error('Error al guardar ficha clínica:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{formData.id ? 'Editar' : 'Crear'} Ficha Clínica</h2>
      <input
        name="paciente_id"
        placeholder="ID del Paciente"
        value={formData.paciente_id}
        onChange={handleChange}
        required
      />
      <input
        name="doctor_id"
        placeholder="ID del Médico"
        value={formData.doctor_id}
        onChange={handleChange}
        required
      />
      <textarea
        name="motivo_consulta"
        placeholder="Motivo de la consulta"
        value={formData.motivo_consulta}
        onChange={handleChange}
        required
      />
      <textarea
        name="detalles_consulta"
        placeholder="Detalles de la consulta"
        value={formData.detalles_consulta}
        onChange={handleChange}
        required
      />
      <textarea
        name="diagnostico"
        placeholder="Diagnóstico"
        value={formData.diagnostico}
        onChange={handleChange}
        required
      />
      <textarea
        name="tratamiento"
        placeholder="Tratamiento"
        value={formData.tratamiento}
        onChange={handleChange}
        required
      />
      <input
        name="appointmentDate"
        type="date"
        value={formData.appointmentDate}
        onChange={handleChange}
      />
      <button type="submit">{formData.id ? 'Actualizar' : 'Crear'}</button>
    </form>
  );
};

export default FichaClinicaForm;
