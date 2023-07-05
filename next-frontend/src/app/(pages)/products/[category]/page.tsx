import { Metadata } from "next";

import { ItemComponent, TopHeaderComponent } from "@/app/components";
import { getLatestProductsByCategory } from "@/sanity/schema/sanity-utils";
import { ScrollToTop } from "@/app/utils";

import { IProducts } from "@/app/types";

export async function generateStaticParams() {
  return [{ category: "men" }, { category: "women" }, { category: "kids" }];
}

export const dynamicParams = false;

type category = "men" | "women" | "kids";

export async function generateMetadata({
  params,
}: {
  params: { category: category };
}): Promise<Metadata> {
  const { category } = params;

  return {
    title: `${
      category.charAt(0).toUpperCase() + category.slice(1)
    } - Xenrir - Discover Your Fashion Essence, Embrace Limitless Style!`,
  };
}

const ProductByCategoryPage = async ({
  params,
}: {
  params: { category: category };
}) => {
  const { category } = params;

  const catData = await getLatestProductsByCategory(category);

  return (
    <>
      <ScrollToTop />
      <div className="flex w-full h-auto items-center justify-center">
        <section className="flex flex-col items-center justify-between gap-[20px] w-[90%] h-auto pt-[80px] pb-[170px] 2xl:max-w-[1400px]">
          <TopHeaderComponent
            title={category.toUpperCase()}
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

export default ProductByCategoryPage;
