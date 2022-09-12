import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
     Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-API-Key': 'ea525738b2a0d95fd70e203013f6ee3e49c3e227'
  }
});
api.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
// api.defaults.headers.options['Access-Control-Allow-Origin'] = '*'
api.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  }
);

export default api;
