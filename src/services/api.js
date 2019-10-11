import axios from 'axios';

const REMOTO = "177.89.50.127:8080/sopa/api"
const api = axios.create({
    baseURL: REMOTO,
});

export default api;
