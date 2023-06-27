import { Dispatch, ReactNode, SetStateAction } from "react";
import { TypedObject } from "sanity";

export interface IProducts {
  _id: string;
  _createdAt: string;
  productId: string;
  name: string;
  productType: string;
  price: number;
  description: TypedObject | TypedObject[];
  categories: Array<string>;
  quantity: number;
  brand: string;
  origin: string;
  images: Array<string>;
  alt: Array<string>;
  sized: Array<string>;
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
  sized: string;
}

export interface ICartReq {
  _id: string;
  quantity: number;
  sized: string;
}

export interface IProductDetails {
  productData: IProducts;
  children: ReactNode;
  setProSize: Dispatch<SetStateAction<string>>;
}

export interface ICustomRadioSize {
  sizes: Array<string>;
  setProSize: Dispatch<SetStateAction<string>>;
}
