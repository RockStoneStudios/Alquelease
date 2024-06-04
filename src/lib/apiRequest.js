import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://alquelease-336066c2c468.herokuapp.com/api",
  withCredentials: false, // Incluir credenciales en las solicitudes
  headers : {
    "Content-Type": "application/json"
  }
  
});

export default apiRequest;