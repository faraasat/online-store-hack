import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "m4fy6zkr",
  dataset: "production",
  apiVersion: "2023-06-18",
});

export const getProducts = async () => {
  return client.fetch(
    groq`*[_type == "product"] | order(_createdAt desc) {
      _id,
      _createdAt,
      productId,
      name,
      productType,
      price,
      quantity,
      description,
      brand,
      origin,
      categories,
      images,
    }`
  );
};

export const getLatestProducts = async () => {
  return client.fetch(
    groq`*[_type == "product"] | order(_createdAt desc)[0..2] {
      _id,
      _createdAt,
      productId,
      name,
      productType,
      price,
      quantity,
      description,
      brand,
      origin,
      categories,
      "images":images[].asset->url,
      "alt":images[].alt,
      sized,
    }`
  );
};

export const getLatestProductsByCategory = async (category: string) => {
  return client.fetch(
    groq`*[_type == "product" && "${category}" in categories] | order(_createdAt desc) {
      _id,
      _createdAt,
      productId,
      name,
      productType,
      price,
      quantity,
      description,
      brand,
      origin,
      categories,
      "images":images[].asset->url,
      "alt":images[].alt,
      sized,
    }`
  );
};

export const getProductData = async (id: string) => {
  return client.fetch(
    groq`*[_type == "product" && "${id}" == _id] | order(_createdAt desc) {
      _id,
      _createdAt,
      productId,
      name,
      productType,
      price,
      quantity,
      description,
      brand,
      origin,
      categories,
      "images":images[].asset->url,
      "alt":images[].alt,
      sized,
    }`
  );
};

export const getAllProductData = async () => {
  return client.fetch(
    groq`*[_type == "product"] | order(_createdAt desc) {
      _id,
      _createdAt,
      productId,
      name,
      productType,
      price,
      quantity,
      description,
      brand,
      origin,
      categories,
      "images":images[].asset->url,
      "alt":images[].alt,
      sized,
    }`
  );
};
