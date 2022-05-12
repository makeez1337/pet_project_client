import axiosService from './axiosService';
import { AxiosResponse } from 'axios';

import { Urls } from '../constants';
import { IBasketDeviceResponse, IBasketDevicesCountResponse } from '../interfaces';

export const basketDeviceService = {
  createBasketDevice: async (phoneId: number): Promise<AxiosResponse<IBasketDeviceResponse>> => {
    return axiosService.post(`${Urls.BasketDevice}/addItem`, { phoneId });
  },
  getDevicesByUserId: (userId: number): Promise<AxiosResponse<IBasketDevicesCountResponse[]>> => {
    return axiosService.get(`${Urls.BasketDevice}/${userId}`);
  }
};
