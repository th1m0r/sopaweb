import axios from 'axios';


const api = axios.create({
    baseURL: "https://apisopa.herokuapp.com/sopa/api",
});

export default api;