"use client";

import { useContext } from "react";

import { IoMdArrowDropdown } from "react-icons/io";

import { CartContext } from "@/app/providers";

import { ICart } from "@/app/types";

import styles from "../styles.module.css";
import { FaShoppingCart } from "react-icons/fa";
import CartItem from "../cart-item";
import LinkButton from "../link-button";

const MyCart = ({ navWidth }: { navWidth?: string }) => {
  const { cart, loading } = useContext(CartContext);

  let myCart: ICart[] = [];

  if (cart) {
    myCart = cart;
  }

  return (
    <div className="relative group flex justify-center">
      <div className="relative flex items-center justify-center">
        <div className="absolute right-0 top-0 bg-[color:var(--bg-3)] text-[color:var(--primary-1)] p-1 w-[20px] h-[20px] rounded-full flex items-center justify-center text-[14px] translate-x-[8px] translate-y-[-8px]">
          {myCart.length > 10 ? "10+" : myCart.length}
        </div>
        <FaShoppingCart className="text-[25px]" />
      </div>
      <div className="hidden absolute group-hover:flex group-hover:flex-col items-center translate-x-[-30px]">
        {/* <div className="flex rotate-180 mt-[0px] transition-all">
          <IoMdArrowDropdown className="text-[40px]" />
        </div> */}
        <div className="flex group-hover:flex-col pt-[19px] mt-[20px] text-[color:var(--primary-1)]">
          <div
            className={`bg-[color:rgba(var(--bg-1-color),0.8)] shadow-[0px_0px_2px_1px_rgba(var(--primary-1-color),0.5)] rounded-lg ${
              navWidth ? navWidth : "w-[250px]"
            } ${styles.blur}`}
          >
            <div
              className={`flex flex-col py-8 px-5 gap-3 transition-all ${styles.blur}`}
            >
              {loading ? (
                <div className="font-sansita text-[18px] text-center py-4">
                  Loading...
                </div>
              ) : (
                <>
                  {myCart.length > 0 ? (
                    <div
                      className={`flex flex-col gap-3 min-h-[350px] max-h-[calc(100vh-250px)] pr-[10px] overflow-y-auto ${styles.scroll_override}`}
                    >
                      {myCart.map((myc) => {
                        return (
                          <CartItem key={myc._id + myc.sized} cart={myc} />
                        );
                      })}
                    </div>
                  ) : (
                    <div className="font-sansita text-[18px] text-center py-4">
                      No Item in Cart!
                    </div>
                  )}
                </>
              )}
              <LinkButton
                href="/cart"
                btnText="Go To Cart"
                showGradient={true}
                className="mt-[15px] py-3 px-7 text-white hover:text-[color:var(--primary-1)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
