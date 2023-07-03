import axios from 'axios';

export const http = axios.create({
    baseURL: process.env.JSON_SERVER_ADDRESS,
});


http.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);
