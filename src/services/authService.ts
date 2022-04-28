import { axiosService } from './axiosService';
import { Urls } from '../constants/urls';
import { ILoginCredentials, IAuthResponse } from '../interfaces/authInterface';
import { AxiosResponse } from 'axios';

export const authService = {
  login: async (credentials: ILoginCredentials): Promise<AxiosResponse<IAuthResponse>> => {
    return axiosService.post(`${Urls.Auth}${Urls.Login}`, credentials);
  },
  refresh: async (refreshToken: string):Promise<AxiosResponse<IAuthResponse>> => {
    return axiosService.post(`${Urls.Auth}${Urls.Refresh}`, refreshToken);
  }
};
