import { IPhone } from './PhoneFieldsInterface';

export interface IBasketDeviceResponse {
  id: number;
  phoneId: number;
  basketId: number;
  createdAt: string;
  updatedAt: string;
}

export interface IBasketDevicesCountResponse {
  count: string;
  totalPrice: number;
  phone: IPhone;
}
