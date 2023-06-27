import Image from "next/image";
import { FC } from "react";

import { PortableText } from "@portabletext/react";

import { countryToCodeData, countryToEmojiData } from "@/data";
import { CustomRadioSize } from "./client";

import { IProductDetails } from "@/app/types";

export const ProductDetails: FC<IProductDetails> = ({
  productData,
  children,
  setProSize,
}) => {
  const countryCode = countryToCodeData.get(productData.origin) || "";

  const countryEmoji = countryToEmojiData.get(countryCode);

  return (
    <div className="grid grid-cols-12 gap-6 items-start justify-between w-full mt-[30px] h-auto p-6 rounded-lg">
      <div className="col-span-1 relative w-full h-[80px] rounded-lg cursor-pointer">
        <Image
          src={productData.images[0]}
          alt={productData.alt[0]}
          fill
          className="object-cover rounded-lg"
          draggable={false}
          sizes="70px"
        />
      </div>
      <div className="col-span-5 relative w-full h-[600px] rounded-lg">
        <Image
          src={productData.images[0]}
          alt={productData.alt[0]}
          fill
          className="object-cover rounded-lg"
          draggable={false}
          sizes="600px"
        />
      </div>
      <div className="col-span-6 relative w-full rounded-lg">
        <h1 className="font-sansita text-[15px] mb-[10px] text-[color:var(--primary-1)] font-bold">
          {productData.productId}
        </h1>
        <h1 className="font-sansita text-[35px] leading-[1]">
          {productData.name}
        </h1>
        <h2 className="font-pridi text-[30px] font-bold text-[color:var(--primary-3)]">
          {productData.productType}
        </h2>
        <h2 className="text-[22px] font-bold text-[color:var(--primary-3)] mt-[5px]">
          By: {productData.brand}
        </h2>
        <h3 className="flex flex-col mt-[35px]">
          <div className="text-[25px] font-bold leading-[1]">
            Delivers From:
          </div>
          <div className="flex items-center gap-[10px]">
            {countryEmoji && countryEmoji.image && (
              <div className="relative w-[50px] h-[50px]">
                <Image
                  src={countryEmoji.image}
                  alt={productData.origin}
                  fill
                  draggable={false}
                  sizes="50px"
                />
              </div>
            )}
            <div className="text-[22px] font-sansita font-bold">
              {productData.origin}
            </div>
          </div>
        </h3>
        {productData?.sized?.length > 0 && (
          <div className="flex flex-col mt-[30px]">
            <h3 className="text-[20px]">Please Select Size:</h3>
            <div className="flex gap-[10px]">
              <CustomRadioSize
                sizes={productData.sized}
                setProSize={setProSize}
              />
            </div>
          </div>
        )}
        <h3 className="text-[30px] font-bold text-[color:var(--primary-3)] mt-[20px]">
          ${productData.price}
        </h3>
        {children}
      </div>
      <div className="col-span-12 flex flex-col w-full mt-[50px]">
        <h2 className="text-[30px] font-sansita font-bold">
          Product Description:
        </h2>
        <div className="flex flex-col w-full">
          <PortableText value={productData.description} />
        </div>
      </div>
    </div>
  );
};
