import { AxiosResponse } from 'axios';

import axiosService from './axiosService';
import { Urls } from '../constants/urls';
import { IMemory } from '../interfaces/PhoneFieldsInterface';

export const memoryService = {
  getAll: async (): Promise<AxiosResponse<IMemory[]>> => axiosService.get(`${Urls.Memory}`)
};
