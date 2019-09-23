import axios from 'axios';


const api = axios.create({
    baseURL: "http://192.168.0.19:6367/sopa/api",
});

export default api;