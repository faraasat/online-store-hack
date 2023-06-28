"use client";

import { useContext, useState } from "react";

import { useAuth, useUser } from "@clerk/nextjs";
import { HiMinus, HiPlus } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";

import { CartContext } from "@/app/providers";
import { CustomButton } from "@/app/components/button";
import { CartItem } from "./static";
import { getStripe } from "@/app/utils";

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

export const CheckoutBtn = ({ cart }: { cart: ICart[] }) => {
  const { isLoaded, sessionId: sId, userId } = useAuth();
  const { user } = useUser();
  const [loading, setLoading] = useState<boolean>(false);
  const [btnText, setBtnText] = useState("Checkout");

  const startCheckout = () => {
    (async () => {
      try {
        setBtnText("Fetching Relevant Information");
        setLoading(true);
        
        const response = await fetch("/api/stripe-checkout", {
          method: "POST",
          body: JSON.stringify({
            cartItems: cart,
            userAuth: {
              userName: user?.fullName,
              userId: userId,
              sessionId: sId,
            },
          }),
        });
        const data = await response.json();
        console.log(data);

        setBtnText("Redirecting to Stripe");

        const { sessionId } = data;

        const stripe = await getStripe();

        const result = await stripe.redirectToCheckout({
          sessionId,
        });

        console.log(result);

        setBtnText("Checkout");
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setBtnText("Checkout");
      }
    })();
  };

  return (
    <>
      {!isLoaded ? (
        <div></div>
      ) : isLoaded && !sId ? (
        <div className="w-full justify-center items-center text-center text-[25px] font-bold font-mochiy text-[color:var(--accent-2)]">
          Please Login to Checkout
        </div>
      ) : (
        <CustomButton
          btnText={btnText}
          onClick={startCheckout}
          loading={loading}
          disabled={loading}
          showGradient={!loading}
          Icon={{
            Img: BsFillCartCheckFill,
            position: "right",
          }}
          className="py-3 px-12"
        />
      )}
    </>
  );
};
