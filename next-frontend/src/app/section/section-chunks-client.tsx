"use client";

import { HiShoppingCart } from "react-icons/hi";

import { LinkButtonComponent } from "../components";

export const HeroLinkButton = () => {
  return (
    <LinkButtonComponent
      btnText="Start Shopping"
      href="/all-products"
      showGradient={true}
      Icon={{
        Img: HiShoppingCart,
        position: "right",
      }}
      className="text-white hover:text-[color:var(--primary-1)] py-4 px-6"
    />
  );
};
