import { createClient, groq } from "next-sanity";

export const getProducts = async () => {
  const client = createClient({
    projectId: "m4fy6zkr",
    dataset: "production",
    apiVersion: "2023-06-18",
  });

  return client.fetch(
    groq`*[_type == "product"]{
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
  const client = createClient({
    projectId: "m4fy6zkr",
    dataset: "production",
    apiVersion: "2023-06-18",
  });

  return client.fetch(
    groq`*[_type == "product"] | order(_createdAt asc)[0..2] {
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
