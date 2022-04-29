import { axiosService } from './axiosService';
import { Urls } from '../constants/urls';
import { ILoginCredentials, IAuthResponse } from '../interfaces/authInterface';
import { AxiosResponse } from 'axios';

export const authService = {
  login: async (credentials: ILoginCredentials): Promise<AxiosResponse<IAuthResponse>> => {
    return axiosService.post(`${Urls.Auth}${Urls.Login}`, credentials);
  },
  refresh: async (): Promise<AxiosResponse<IAuthResponse>> => {
    return axiosService.get(`${Urls.Auth}${Urls.Refresh}`);
  },
  logout: async ():Promise<AxiosResponse<void>> => {
    return axiosService.post(`${Urls.Auth}${Urls.Logout}`);
  }
};
