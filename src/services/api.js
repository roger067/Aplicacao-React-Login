import axios from 'axios';

const api = axios.create({
    baseURL: 'http://app-test.us-east-2.elasticbeanstalk.com'
});

api.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error.response);
});

export default api;