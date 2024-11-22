import api from "./api";

export const getMedicos = async () => {
  const response = await api.get("/medicos");
  return response.data;
};

export const createMedico = async (medico) => {
  const response = await api.post("/medicos", medico);
  return response.data;
};

export const updateMedico = async (id, medico) => {
  const response = await api.put(`/medicos/${id}`, medico);
  return response.data;
};

export const deleteMedico = async (id) => {
  const response = await api.delete(`/medicos/${id}`);
  return response.data;
};
