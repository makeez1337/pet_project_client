import { IPhoneFormData } from '../interfaces';

export const generateFormDataForUpdate = (data: Partial<IPhoneFormData>) => {
  const formData = new FormData();

  if (data.name) {
    formData.append('name', data.name);
  }

  if (data.img) {
    formData.append('phoneImg', data.img[0]);
  }

  if (data.description) {
    formData.append('description', data.description);
  }

  if (data.price) {
    formData.append('price', data.price);
  }

  if (data.processor) {
    formData.append('processor', data.processor);
  }

  if (data.camera) {
    formData.append('camera', data.camera);
  }

  if (data.brandId) {
    formData.append('brandId', data.brandId);
  }

  if (data.memoryId) {
    formData.append('memoryId', data.memoryId);
  }

  if (data.ramId) {
    formData.append('ramId', data.ramId);
  }

  return formData;
};

export const generateFormDataForCreate = (data: IPhoneFormData) => {
  const formData = new FormData();

  formData.append('name', data.name);
  formData.append('phoneImg', data.img[0]);
  formData.append('description', data.description);
  formData.append('price', data.price);
  formData.append('processor', data.processor);
  formData.append('camera', data.camera);
  formData.append('brandId', data.brandId);
  formData.append('memoryId', data.memoryId);
  formData.append('ramId', data.ramId);

  return formData;
};
