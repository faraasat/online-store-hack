"use client";

import { useContext } from "react";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";

import { CartContext } from "@/app/providers";

export const CartClient = ({ _id, sized }: { _id: string; sized: string }) => {
  const { incrementItem, decrementItem, removeItem } = useContext(CartContext);

  return (
    <div className="flex items-center justify-center gap-3 mt-[10px]">
      <div
        className="flex text-[15px] items-center justify-center border p-[5px] rounded-md hover:bg-[color:var(--primary-1)] hover:color-white transition-colors"
        onClick={() => incrementItem(_id, sized)}
      >
        <AiOutlinePlus />
      </div>
      <div
        className="flex text-[15px] items-center justify-center border p-[5px] rounded-md hover:bg-[color:var(--primary-1)] hover:color-white transition-colors"
        onClick={() => decrementItem(_id, sized)}
      >
        <AiOutlineMinus />
      </div>
      <div
        className="flex text-[15px] items-center justify-center border p-[5px] rounded-md hover:bg-[color:var(--primary-1)] hover:color-white transition-colors"
        onClick={() => removeItem(_id, sized)}
      >
        <BsTrashFill />
      </div>
    </div>
  );
};
