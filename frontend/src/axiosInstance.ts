import axios from "axios";

const instance = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_ADDRESS}`,
    withCredentials: true,
    timeout: 10000,
});

export default instance;