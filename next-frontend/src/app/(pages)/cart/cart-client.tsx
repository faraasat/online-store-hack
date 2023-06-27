"use client";

import { useContext } from "react";

import { CartContext } from "@/app/providers";

import { ICart } from "@/app/types";

export const CartClient = () => {
  const { cart } = useContext(CartContext);

  let myCart: ICart[] = [];

  if (cart) myCart = cart;

  return (
    <div className="flex w-full">
      {myCart.length > 0 ? (
        <div></div>
      ) : (
        <div className="font-sansita text-[30px] py-[50px] text-center w-full flex justify-center">
          No Item in Cart
        </div>
      )}
    </div>
  );
};
