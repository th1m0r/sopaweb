import axios from 'axios';

const REMOTO = "https://apisopa.herokuapp.com/sopa/api"
const LOCAL = "http://localhost:8080/sopa/api"
const api = axios.create({
    baseURL: LOCAL,
});

export default api;