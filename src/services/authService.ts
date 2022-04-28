import { axiosService } from './axiosService';
import { Urls } from '../constants/urls';
import { ILoginCredentials, ILoginResponse } from '../interfaces/authInterface';
import { AxiosResponse } from 'axios';

export const authService = {
  login: async (credentials: ILoginCredentials): Promise<AxiosResponse<ILoginResponse>> => {
    return axiosService.post(`${Urls.Auth}${Urls.Login}`, credentials);
  }
};
