import api from "./api";
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/fichasClinicas';


export const getFichasClinicas = async () => {
  const response = await api.get("/fichas-clinicas");
  return response.data;
};

export const createFichaClinica = async (ficha) => {
  const response = await api.post("/fichas-clinicas", ficha);
  return response.data;
};

export const updateFichaClinica = async (id, ficha) => {
  const response = await api.put(`/fichas-clinicas/${id}`, ficha);
  return response.data;
};

export const deleteFichaClinica = async (id) => {
  const response = await api.delete(`/fichas-clinicas/${id}`);
  return response.data;
};

export const searchFichasClinicas = async (filters) => {
  const { paciente_id, doctor_id, fecha, especialidad } = filters;
  const params = new URLSearchParams({ paciente_id, doctor_id, fecha, especialidad });
  const response = await axios.get(`${API_URL}/search?${params.toString()}`);
  return response.data;
};
