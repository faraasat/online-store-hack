"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

import { useAuth } from "@clerk/nextjs";
import Stripe from "stripe";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import LinkButton from "@/app/components/link-button";
import { toastError } from "@/app/utils";
import { CartContext } from "@/app/providers";
import Link from "next/link";
import Image from "next/image";

export const OrderLink = () => {
  return (
    <LinkButton
      btnText="Go to Your Orders"
      href="/orders"
      Icon={{
        Img: FaArrowRight,
        position: "right",
      }}
      className="py-3 px-9"
      showGradient
    />
  );
};

export const CheckOrderParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { isLoaded, sessionId } = useAuth();

  const { clearCart } = useContext(CartContext);

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (searchParams.get("order_id") && isLoaded) {
      (async () => {
        try {
          if (sessionId) {
            const sessData = await fetch(
              `/api/stripe-session-info?order_id=${searchParams.get(
                "order_id"
              )}`,
              {
                method: "GET",
              }
            );
            const data = await sessData.json();
            if (
              data &&
              data.data &&
              data.data.data &&
              data.data.data.length > 0
            ) {
              // clearCart()
              setLoading(false);
              setItems(data.data.data);
            } else {
              toastError("order-malf-error", "Order Malformed or Invalid!");
              router.push("/orders");
            }
          } else {
            toastError("order-malf-error", "Forbidden!");
            router.push("/");
          }
        } catch (err) {
          console.log(err);
          if (sessionId) {
            toastError("order-malf-error", "Unexpected Error Occcured!");
            router.push("/orders");
          } else {
            toastError("order-malf-error", "Unexpected Error Occcured!");
            router.push("/");
          }
        }
      })();
    }
  }, [isLoaded]);

  return (
    <div className="flex w-full h-full items-center justify-center py-[30px]">
      {loading ? (
        <div className="flex items-center justify-center gap-4 font-mochiy text-[20px]">
          <AiOutlineLoading3Quarters className="animate-spin" />
          <h4>Loading Product Ordered...</h4>
        </div>
      ) : (
        <div className="flex flex-col gap-6 items-center justify-center w-full h-auto">
          {items.map((it: Stripe.LineItem, i) => {
            const product = it.price!.product as Stripe.Product;

            return (
              <div key={i} className="grid gap-x-3 grid-cols-12 w-full">
                <div className="col-span-3 w-full aspect-square relative flex items-center justify-center overflow-hidden rounded-lg">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    draggable={false}
                    className="object-cover rounded-lg hover:scale-[1.08] cursor-pointer transition-all duration-[0.6s]"
                    sizes="400px"
                  />
                </div>
                <div className="col-span-7 flex flex-col w-full">
                  <h1 className="font-sansita text-[35px] leading-[1]">
                    {product.name}
                  </h1>
                  <h1 className="font-pridi font-bold text-[35px] leading-[1]">
                    {product.metadata.brand
                      ? product.metadata.brand
                      : "No Brand"}
                  </h1>
                  <h3 className="text-[25px] leading-[1] mt-[30px] mb-[15px]">
                    Size: {product.metadata.size}
                  </h3>
                  <h3 className="text-[25px] leading-[1] mb-[15px]">
                    Price: $ {it.price?.unit_amount! / 100}
                  </h3>
                  <h3 className="text-[25px] leading-[1]">
                    Qty: {it.quantity}
                  </h3>
                </div>
                <div className="col-span-2 h-full w-full flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center font-mochiy text-[25px] font-bold leading-[1]">
                    <div>Total:</div>
                    <div>$ {(it.price?.unit_amount! / 100) * it.quantity!}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
