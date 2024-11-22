import api from "./api";

export const buscarConsultas = async (filtros) => {
  const response = await api.get('/clinical-records/search', { params: filtros });
  return response.data;
};
