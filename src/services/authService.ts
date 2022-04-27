import { axiosService } from './axiosService';
import { Urls } from '../constants/urls';
import { IAuthInterface, ILoginResponse } from '../interfaces/authInterface';

export const authService = {
  login: async (credentials: IAuthInterface): Promise<ILoginResponse> => {
    return axiosService.post(`${Urls.Auth}${Urls.Login}`, credentials);
  }
};
