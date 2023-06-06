import axios from 'axios';

const getBaseUrl = () => {
  return 'http://localhost:9000/api';
};

const instance = axios.create({
  baseURL: getBaseUrl(),
});

export default instance;
