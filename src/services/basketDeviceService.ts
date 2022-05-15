import axiosService from './axiosService';
import { AxiosResponse } from 'axios';

import { Urls } from '../constants';
import { IBasketDeviceResponse, IBasketDevicesCountResponse } from '../interfaces';

export const basketDeviceService = {
  createBasketDevice: async (phoneId: number): Promise<AxiosResponse<IBasketDeviceResponse>> => {
    return axiosService.post(`${Urls.BasketDevice}/addItem`, { phoneId });
  },
  getDevicesByUserId: async (
    userId: number
  ): Promise<AxiosResponse<IBasketDevicesCountResponse[]>> => {
    return axiosService.get(`${Urls.BasketDevice}/${userId}`);
  },
  deleteItemByParams: async (phoneId: number, userId: number): Promise<AxiosResponse<number>> => {
    return axiosService.delete(`${Urls.BasketDevice}`, { data: { phoneId, userId } });
  },
  confirmPurchase: async (email: string, userId: number): Promise<AxiosResponse<string>> => {
    return axiosService.post(`${Urls.BasketDevice}/confirmPurchase`, { email, userId });
  }
};
