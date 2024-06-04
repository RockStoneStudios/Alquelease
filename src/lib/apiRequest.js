import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://alquelease-336066c2c468.herokuapp.com/api",
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
  }
});

export default apiRequest;