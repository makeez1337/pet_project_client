import axiosService from './axiosService';
import { AxiosResponse } from 'axios';

import { Urls } from '../constants';
import { IRam } from '../interfaces';

export const ramService = {
  getAll: async (): Promise<AxiosResponse<IRam[]>> => axiosService.get(Urls.Ram)
};
