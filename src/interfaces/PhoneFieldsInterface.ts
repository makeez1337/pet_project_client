export interface IPhone {
  id: number;
  name: string;
  description: string;
  memoryId: number;
  ramId: number;
  camera: number;
  price: number;
  img: string;
  brandId: number;
  createdAt: string;
  updatedAt: string;
}

export interface PhonePaginationResponse {
  page: number;
  perPage: number;
  count: number;
  rows: IPhone[];
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
