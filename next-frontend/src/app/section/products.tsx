import Image from "next/image";
import Link from "next/link";

import { getLatestProducts } from "@/sanity/schema/sanity-utils";
import { TopHeaderComponent } from "../components";
import { AddToCartButton } from "./section-client";

import { IProducts } from "../types";

const ProductsSection = async () => {
  const productData = await getLatestProducts();

  return (
    <section className="flex flex-col items-center justify-between gap-[20px] w-[90%] h-auto pt-[80px] pb-[90px] 2xl:max-w-[1400px]">
      <TopHeaderComponent title="Products" desc="Check What We Have" />
      <div className="grid grid-cols-3 gap-6 items-center justify-between w-full mt-[30px] h-auto p-6 rounded-lg">
        {productData.map((pro: IProducts) => {
          return (
            <Link
              href={`/products/${pro._id}`}
              className="col-span-1 flex flex-col max-w-[400px] hover:scale-[1.05] transition-all duration-[0.5s]"
              key={pro._id}
            >
              <div className="relative flex items-center justify-center w-full h-[400px] rounded-lg mt-4">
                <Image
                  src={pro.images[0]}
                  alt={pro.alt[0]}
                  fill
                  className="object-cover rounded-lg"
                  draggable={false}
                />
              </div>
              <h1 className="font-sansita text-[22px] text-center">
                {pro.name}
              </h1>
              <p className="text-center text-[20px] leading-[1]">
                {pro.productType}
              </p>
              <p className="text-center text-[20px] leading-[1] mt-[2px] font-bold">
                ${pro.price}
              </p>
              <div className="self-center flex mt-[15px]">
                <AddToCartButton products={pro} />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsSection;
