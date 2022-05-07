import { AxiosResponse } from 'axios';

import axiosService from './axiosService';
import { IBrand } from '../interfaces/brandInterface';
import { Urls } from '../constants/urls';

export const brandService = {
  getAll: (): Promise<AxiosResponse<IBrand>> => axiosService.get(`${Urls.Brands}`)
};
