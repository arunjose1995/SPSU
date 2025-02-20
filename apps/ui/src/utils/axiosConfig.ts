import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://5100-103-156-100-18.ngrok-free.app', 
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('authToken'); // Retrieve token from session storage
    if (token) {
        if (config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config; 
});

axiosInstance.interceptors.response.use(
    (response) => response, 
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error('Unauthorized. Please log in again.');
        }
        throw error; 
    }
);