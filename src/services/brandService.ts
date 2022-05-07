import { AxiosResponse } from 'axios';

import axiosService from './axiosService';
import { IBrand } from '../interfaces/PhoneFieldsInterface';
import { Urls } from '../constants/urls';

export const brandService = {
  getAll: async (): Promise<AxiosResponse<IBrand[]>> => axiosService.get(`${Urls.Brands}`)
};
