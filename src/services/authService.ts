import { AxiosResponse } from 'axios';

import axiosService from './axiosService';
import { Urls } from '../constants';
import { ILoginCredentials, IAuthResponse, IRegistrationForm } from '../interfaces';

export const authService = {
  registration: async (
    userData: Partial<IRegistrationForm>
  ): Promise<AxiosResponse<IAuthResponse>> => {
    return axiosService.post(`${Urls.Auth}${Urls.Registration}`, userData);
  },
  login: async (credentials: ILoginCredentials): Promise<AxiosResponse<IAuthResponse>> => {
    return axiosService.post(`${Urls.Auth}${Urls.Login}`, credentials);
  },
  refresh: async (): Promise<AxiosResponse<IAuthResponse>> => {
    return axiosService.get(`${Urls.Auth}${Urls.Refresh}`, { withCredentials: true });
  },
  logout: async (): Promise<void> => {
    await axiosService.post(`${Urls.Auth}${Urls.Logout}`);
  }
};
