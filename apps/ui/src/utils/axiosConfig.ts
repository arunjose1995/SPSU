import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://ba6c-103-156-100-18.ngrok-free.app', 
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use((config) => {
   const session = localStorage.getItem('session');
   const token = session ? JSON.parse(session).user.token : null;

    if (token) {
        if (config.headers) {
            config.headers['x-auth-token'] = token;
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