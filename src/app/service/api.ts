import axios from "axios";

const api = axios.create({
  baseURL: 'https://mytodolistnodejs.onrender.com/',
});

export default api;
