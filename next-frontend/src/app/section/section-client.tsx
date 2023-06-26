"use client";

import { useState } from "react";

import { FaShoppingCart } from "react-icons/fa";

import { CustomButton } from "../components/button";

import { IProducts } from "../types";

export const AddToCartButton = ({ products }: { products: IProducts }) => {
  const [loading, setLoading] = useState(false);

  return (
    <CustomButton
      btnText="Add to Cart"
      loading={loading}
      showGradient={!loading}
      Icon={{
        position: "right",
        Img: FaShoppingCart,
      }}
      className="py-3 px-5 text-white"
    />
  );
};
