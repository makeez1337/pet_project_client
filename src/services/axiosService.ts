import axios from 'axios';

import baseURL, { Urls } from '../constants/urls';
import { IAuthResponse } from '../interfaces/authInterface';

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
        const response = await axios.get<IAuthResponse>(`${Urls.Auth}${Urls.Refresh}`, {
          withCredentials: true
        });
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
