import { IPhoneGroupBy } from './PhoneFieldsInterface';

export interface IBasketDeviceResponse {
  id: number;
  phoneId: number;
  basketId: number;
  createdAt: string;
  updatedAt: string;
}

export interface IBasketDevicesCountResponse extends IPhoneGroupBy {
  id: number;
  count: string;
  totalPrice: number;
}
