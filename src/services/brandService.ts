import { AxiosResponse } from 'axios';

import axiosService from './axiosService';
import { IBrand } from '../interfaces';
import { Urls } from '../constants';

export const brandService = {
  getAll: async (): Promise<AxiosResponse<IBrand[]>> => axiosService.get(Urls.Brands)
};
