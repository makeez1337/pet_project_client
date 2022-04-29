import axios from 'axios';

import baseURL from '../constants/urls';

export const axiosService = axios.create({ baseURL, withCredentials: true });

axiosService.interceptors.request.use((config: any) => {
  config.headers.Authorization = `${localStorage.getItem('accessToken')}`;
  return config;
});
