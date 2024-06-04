import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://alquelease-336066c2c468.herokuapp.com/api",
  withCredentials: false,
  
});

export default apiRequest;