export interface ICategory {
  id: number;
  name: string;
  image: string;
  creationAt?: string;
  updatedAt?: string;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[] | string;
  creationAt?: string;
  updatedAt?: string;
  category?: ICategory;
}

export interface ICitiesData {
  value: string;
  label: string;
}

export interface IOrderItemForm {
  city: string;
  phone: string;
  street: string;
}
