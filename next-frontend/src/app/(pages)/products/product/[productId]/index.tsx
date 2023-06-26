import { getProductData } from "@/sanity/schema/sanity-utils";

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const { productId } = params;

  console.log(productId);

  const productData = await getProductData(productId);

  console.log(productData);

  return <section></section>;
};

export default ProductPage;
