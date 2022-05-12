import axiosService from './axiosService';
import { AxiosResponse } from 'axios';

import { Urls } from '../constants';
import { IBasketDeviceResponse } from '../interfaces/basketDeviceInterface';

export const basketDeviceService = {
  createBasketDevice: async (phoneId: number): Promise<AxiosResponse<IBasketDeviceResponse>> => {
    return axiosService.post(`${Urls.BasketDevice}/addItem`, { phoneId });
  }
};
