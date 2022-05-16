export interface IPhone {
  id: number;
  name: string;
  description: string;
  memoryId: number;
  ramId: number;
  processor: string;
  camera: number;
  price: number;
  brandId: number;
  img: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPhoneJoin extends IPhone {
  brand: IBrand;
  ram: IRam;
  memory: IMemory;
}

export interface IPhoneMinAndMax {
  maxPrice: number;
  minPrice: number;
}

export interface IPhoneGroupBy {
  'phone.id': number;
  'phone.name': string;
  'phone.description': string;
  'phone.memoryId': number;
  'phone.ramId': number;
  'phone.processor': string;
  'phone.camera': number;
  'phone.price': number;
  'phone.brandId': number;
  'phone.img': string;
  'phone.createdAt': string;
  'phone.updatedAt': string;
}

export interface IPhoneFormData {
  name: string;
  img: Array<string | Blob>;
  description: string;
  memoryId: string;
  processor: string;
  ramId: string;
  camera: string;
  price: string;
  brandId: string;
}

export interface PhonePaginationResponse {
  page: number;
  perPage: number;
  count: number;
  rows: IPhone[];
  totalPages: number;
}

export interface IBrand {
  id: number;
  name: string;
}

export interface IRam {
  id: number;
  ram: number;
}

export interface IMemory {
  id: number;
  memory: number;
}
