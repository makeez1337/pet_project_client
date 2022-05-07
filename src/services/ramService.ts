import axiosService from './axiosService';

import { Urls } from '../constants/urls';
import { AxiosResponse } from 'axios';
import { IRam } from '../interfaces/PhoneFieldsInterface';

export const ramService = {
  getAll: async (): Promise<AxiosResponse<IRam[]>> => axiosService.get(Urls.Ram)
};
