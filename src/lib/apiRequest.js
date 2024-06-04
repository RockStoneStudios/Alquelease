import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://alquelease-336066c2c468.herokuapp.com/api",
  withCredentials: true, // Incluir credenciales en las solicitudes
  headers: {
    'Access-Control-Allow-Origin': 'https://www.alquilease.com/', // Reemplazar con el dominio de tu frontend
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  }
  
});

export default apiRequest;