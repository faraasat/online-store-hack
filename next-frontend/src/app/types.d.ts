export interface IProducts {
  _id: string;
  _createdAt: string;
  productId: string;
  name: string;
  productType: string;
  price: number;
  description: Array<Array<Object>>;
  categories: Array<string>;
  quantity: number;
  brand: string;
  origin: string;
  images: Array<string>;
  alt: Array<string>;
  sizes: Array<string>;
}

export interface ICart {
  _id: string;
  productId: string;
  name: string;
  productType: string;
  price: number;
  quantity: number;
  brand: string;
  origin: string;
  images: Array<string>;
  alt: Array<string>;
  size: string;
}

export interface ICartReq {
  _id: string;
  quantity: number;
  size: string;
}
