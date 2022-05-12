export interface IPhone {
  id: number;
  name: string;
  description: string;
  memoryId: number;
  ramId: number;
  camera: number;
  price: number;
  brandId: number;
  img: string;
  createdAt: string;
  updatedAt: string;
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
