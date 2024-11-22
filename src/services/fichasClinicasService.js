import api from "./api";

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
