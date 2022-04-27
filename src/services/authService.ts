import { axiosService } from './axiosService';
import { Urls } from '../constants/urls';
import { ILoginCredentials, ILoginResponse } from '../interfaces/authInterface';

export const authService = {
  login: async (credentials: ILoginCredentials): Promise<ILoginResponse> => {
    return axiosService.post(`${Urls.Auth}${Urls.Login}`, credentials);
  }
};
