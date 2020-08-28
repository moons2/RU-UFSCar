import axios from 'axios';

const api = axios.create({
  baseURL: 'https://us-central1-ru-ufscar-f5b5a.cloudfunctions.net/app/api',
});

export default api;
