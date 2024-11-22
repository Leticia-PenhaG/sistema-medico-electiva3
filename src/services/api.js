import axios from "axios";

// Configuración base de Axios
const api = axios.create({
  baseURL: "http://localhost:5000/api", // Cambia al URL de tu backend
  timeout: 10000, // Tiempo máximo para una solicitud
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;