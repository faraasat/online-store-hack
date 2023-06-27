import Image from "next/image";

import { CartClient } from "./client";

import { ICart } from "@/app/types";

const CartItem = ({ cart }: { cart: ICart }) => {
  return (
    <div className="grid grid-cols-6 gap-3 w-full">
      <div className="col-span-2 relative flex items-center justify-center w-full h-[80px]">
        <Image
          src={cart.images[0]}
          alt={cart.alt[0]}
          fill
          draggable={false}
          className="object-cover"
        />
      </div>
      <div className="col-span-4 flex flex-col">
        <p
          className="leading-[1] text-[14px] font-bold flex"
          title={cart.name}
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {cart.name}
        </p>
        <p className="leading-[1] text-[12px]">Size: {cart.sized}</p>
        <p className="leading-[1] text-[12px]">Qty: {cart.quantity}</p>
        <CartClient _id={cart._id} sized={cart.sized} />
      </div>
    </div>
  );
};

export default CartItem;
