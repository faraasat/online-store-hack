import { TopHeaderComponent } from "@/app/components";
import { getProductData } from "@/sanity/schema/sanity-utils";
import { ProductDetailsWithBtn } from "./client";

import { IProducts } from "@/app/types";

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const { productId } = params;

  const productData: IProducts = (await getProductData(productId))[0];

  return (
    <div className="flex w-full h-auto items-center justify-center">
      <section className="flex flex-col items-center justify-between gap-[20px] w-[90%] h-auto pt-[80px] pb-[170px] 2xl:max-w-[1400px]">
        <TopHeaderComponent
          title={productData.name.toUpperCase()}
          desc="Check What We Have"
        />
        <ProductDetailsWithBtn productData={productData} />
      </section>
    </div>
  );
};

export default ProductPage;
