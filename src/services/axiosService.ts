import axios from 'axios';

import baseURL, { Urls } from '../constants/urls';
import { authService } from './authService';

const axiosService = axios.create({ baseURL, withCredentials: true });

axiosService.interceptors.request.use((config: any) => {
  config.headers.Authorization = localStorage.getItem('accessToken');
  return config;
});

axiosService.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalConfig = error.config;
    if (error?.response?.status === 401 && error.config && !originalConfig._isRetry) {
      try {
        originalConfig._isRetry = true;
        console.log(originalConfig._isRetry);
        const response = await authService.refresh();
        localStorage.setItem('accessToken', response.data.accessToken);
        return axiosService.request(originalConfig);
      } catch (e) {
        console.log('Не авторизований');
      }
    }
    throw error;
  }
);

export default axiosService;
