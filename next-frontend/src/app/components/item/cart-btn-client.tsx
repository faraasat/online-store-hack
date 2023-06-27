"use client";

import { useContext } from "react";

import { FaShoppingCart } from "react-icons/fa";

import { CustomButton } from "../button";
import { CartContext } from "@/app/providers";

import { IProducts } from "../../types";

export const AddToCartButton = ({ products }: { products: IProducts }) => {
  const { loading, updateCart } = useContext(CartContext);

  return (
    <CustomButton
      btnText="Add to Cart"
      loading={loading}
      disabled={loading}
      showGradient={!loading}
      Icon={{
        position: "right",
        Img: FaShoppingCart,
      }}
      className="py-3 px-5"
      onClick={() => updateCart({ ...products, sized: products.sized[0] })}
    />
  );
};
