import { Metadata } from "next";

import { ItemComponent, TopHeaderComponent } from "@/app/components";
import { getAllProductData } from "@/sanity/schema/sanity-utils";
import { ScrollToTop } from "@/app/utils";

import { IProducts } from "@/app/types";

export const metadata: Metadata = {
  title:
    "All Products - Xenrir - Discover Your Fashion Essence, Embrace Limitless Style!",
};

const ProductPage = async () => {
  const catData = await getAllProductData();

  return (
    <>
      <ScrollToTop />
      <div className="flex w-full h-auto items-center justify-center">
        <section className="flex flex-col items-center justify-between gap-[20px] w-[90%] h-auto pt-[80px] pb-[170px] 2xl:max-w-[1400px]">
          <TopHeaderComponent
            title={"All Products"}
            desc="Check What We Have"
          />
          <div className="grid grid-cols-3 gap-6 items-center justify-between w-full mt-[30px] h-auto p-6 rounded-lg">
            {catData.map((pro: IProducts) => (
              <ItemComponent key={pro._id} pro={pro} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductPage;
