import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.iextrading.com/1.0/stock/',
});

export default api;
