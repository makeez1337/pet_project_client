import axiosService from './axiosService';

import { Urls } from '../constants';
import { AxiosResponse } from 'axios';
import {IPhone, IPhoneJoin, PhonePaginationResponse} from '../interfaces';

export const phoneService = {
  getByQuery: async (searchQuery: string): Promise<AxiosResponse<PhonePaginationResponse>> => {
    return axiosService.get(`${Urls.Phones}${searchQuery}`);
  },
  create: async (data: FormData): Promise<AxiosResponse<IPhone>> => {
    return axiosService.post(Urls.Phones, data);
  },
  deleteById: (id: number): Promise<AxiosResponse<number>> => {
    return axiosService.delete(Urls.Phones, { data: { id } });
  },
  getById: (id: number):Promise<AxiosResponse<IPhoneJoin>> => {
    return axiosService.get(`${Urls.Phones}/${id}`);
  }
};
