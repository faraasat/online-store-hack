import { getLatestProducts } from "@/sanity/schema/sanity-utils";
import { ItemComponent, TopHeaderComponent } from "../components";

import { IProducts } from "../types";

const ProductsSection = async () => {
  const productData = await getLatestProducts();

  return (
    <section className="flex flex-col items-center justify-between gap-[20px] w-[90%] h-auto pt-[80px] pb-[170px] 2xl:max-w-[1400px]">
      <TopHeaderComponent title="Products" desc="Check What We Have" />
      <div className="grid grid-cols-3 gap-6 items-center justify-between w-full mt-[30px] h-auto p-6 rounded-lg">
        {productData.map((pro: IProducts) => (
          <ItemComponent key={pro._id} pro={pro} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
