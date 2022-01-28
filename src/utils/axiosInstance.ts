import axios from 'axios';

import { MOVIE_API_KEY, MOVIE_DB_BASE_URL } from '@/constants';

const axiosInstance = axios.create({
  baseURL: MOVIE_DB_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  config.params = {
    api_key: MOVIE_API_KEY,
    ...config.params,
  };

  return config;
});

export default axiosInstance;
