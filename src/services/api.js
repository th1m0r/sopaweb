import axios from 'axios';

const REMOTO = "https://apisopa.herokuapp.com/sopa/api"
//const LOCAL = "http://192.168.0.23:8080/sopa/api"
const api = axios.create({
    baseURL: REMOTO,
});

export default api;