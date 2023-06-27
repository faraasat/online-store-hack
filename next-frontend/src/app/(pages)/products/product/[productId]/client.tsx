"use client";

import { FC, useContext, useState } from "react";

import { FaShoppingCart } from "react-icons/fa";

import { ProductDetails } from "./static";
import { CustomButton } from "@/app/components/button";
import { CartContext } from "@/app/providers";

import styles from "./styles.module.css";

import { ICustomRadioSize, IProductDetails, IProducts } from "@/app/types";

export const CustomRadioSize: React.FC<ICustomRadioSize> = ({
  sizes,
  setProSize,
}) => {
  return (
    <>
      {sizes.map((pds, i) => (
        <label htmlFor={pds} className="cursor-pointer" key={i}>
          <input
            type="radio"
            id={pds}
            value={pds}
            className={`hidden ${styles.radio_size}`}
            name="size"
            defaultChecked={i === 0}
            onChange={(e) => setProSize(e.target.value)}
          />
          <div className="flex w-[50px] h-[50px] items-center justify-center rounded-lg">
            {pds.toUpperCase()}
          </div>
        </label>
      ))}
    </>
  );
};

export const ProductDetailsWithBtn: FC<
  Omit<IProductDetails, "children" | "setProSize">
> = ({ productData }) => {
  const [proSize, setProSize] = useState<string>(productData.sized[0] ?? "");

  const { updateCart, loading } = useContext(CartContext);

  let newPro: Omit<IProducts, "quantity"> & { quantity?: number } = productData;

  delete newPro.quantity;

  return (
    <ProductDetails productData={productData} setProSize={setProSize}>
      <div className="flex mt-[30px] justify-center">
        <CustomButton
          btnText="Add to Cart"
          showGradient={!loading}
          disabled={loading}
          loading={loading}
          Icon={{
            position: "right",
            Img: FaShoppingCart,
          }}
          className="py-4 px-8"
          onClick={() => updateCart({ ...productData, sized: proSize })}
        />
      </div>
    </ProductDetails>
  );
};
