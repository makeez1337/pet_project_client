import axiosService from './axiosService';

import { Urls } from '../constants';
import { AxiosResponse } from 'axios';
import { IPhone, IPhoneJoin, IPhoneMinAndMax, PhonePaginationResponse } from '../interfaces';

export const phoneService = {
  getByQuery: async (searchQuery: string): Promise<AxiosResponse<PhonePaginationResponse>> => {
    return axiosService.get(`${Urls.Phones}${searchQuery}`);
  },
  create: async (data: FormData): Promise<AxiosResponse<IPhone>> => {
    return axiosService.post(Urls.Phones, data);
  },
  deleteById: async (id: number): Promise<AxiosResponse<number>> => {
    return axiosService.delete(Urls.Phones, { data: { id } });
  },
  getById: async (id: number): Promise<AxiosResponse<IPhoneJoin>> => {
    return axiosService.get(`${Urls.Phones}/${id}`);
  },
  minAndMax: async (): Promise<AxiosResponse<IPhoneMinAndMax[]>> => {
    return axiosService.get(`${Urls.Phones}/minAndMax`);
  }
};
