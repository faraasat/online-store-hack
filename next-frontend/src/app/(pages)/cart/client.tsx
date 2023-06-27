"use client";

import { useContext } from "react";

import { HiMinus, HiPlus } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";

import { CartContext } from "@/app/providers";
import { CustomButton } from "@/app/components/button";
import { CartItem } from "./static";

import { ICart } from "@/app/types";

export const CartClient = () => {
  const { cart, loading } = useContext(CartContext);

  let myCart: ICart[] = [];

  if (cart) myCart = cart;

  return (
    <div className="flex w-full mt-[40px]">
      {loading ? (
        <div className="font-sansita text-[30px] py-[50px] text-center w-full flex justify-center">
          Loading...
        </div>
      ) : (
        <>
          {myCart.length > 0 ? (
            <CartItem cart={myCart} />
          ) : (
            <div className="font-sansita text-[30px] py-[50px] text-center w-full flex justify-center">
              No Item in Cart
            </div>
          )}
        </>
      )}
    </div>
  );
};

export const UpdateCart = ({ cart }: { cart: ICart }) => {
  const { loading, removeItem, incrementItem, decrementItem } =
    useContext(CartContext);

  return (
    <>
      <div className="flex items-center justify-center">
        <div
          className="flex items-center justify-center w-[40px] h-[40px] border border-[1px_solid_var(--primary-1)] rounded-tl-lg rounded-bl-lg cursor-pointer hover:text-white hover:bg-[color:var(--primary-1)]"
          onClick={() => decrementItem(cart._id, cart.sized)}
        >
          <HiMinus />
        </div>
        <div className="flex items-center justify-center w-[100px] h-[40px] border-t border-b border-t-[1px_solid_var(--primary-1)] border-b-[1px_solid_var(--primary-1)]">
          {cart.quantity}
        </div>
        <div
          className="flex items-center justify-center w-[40px] h-[40px] border border-[1px_solid_var(--primary-1)] rounded-tr-lg rounded-br-lg cursor-pointer hover:text-white hover:bg-[color:var(--primary-1)]"
          onClick={() => incrementItem(cart._id, cart.sized)}
        >
          <HiPlus />
        </div>
      </div>
      <div className="flex items-center justify-center mt-[15px]">
        <CustomButton
          btnText="Remove Item"
          loading={loading}
          disabled={loading}
          Icon={{ position: "right", Img: FaTrash }}
          showGradient={!loading}
          onClick={() => removeItem(cart._id, cart.sized)}
          className="py-3 px-7"
        />
      </div>
    </>
  );
};
