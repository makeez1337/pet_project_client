import { AxiosResponse } from 'axios';

import axiosService from './axiosService';
import { Urls } from '../constants';
import { IMemory } from '../interfaces';

export const memoryService = {
  getAll: async (): Promise<AxiosResponse<IMemory[]>> => axiosService.get(Urls.Memory)
};
