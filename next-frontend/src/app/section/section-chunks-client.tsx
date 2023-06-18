"use client";

import { HiArrowRight, HiShoppingCart } from "react-icons/hi";

import { CustomButtonComponent, LinkButtonComponent } from "../components";

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

export const AestheticLinkButton = () => {
  return (
    <LinkButtonComponent
      btnText="See All Products"
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

export const NewsletterButton = () => {
  return (
    <CustomButtonComponent
      btnText="Get Started"
      showGradient={true}
      Icon={{
        Img: HiArrowRight,
        position: "right",
      }}
      className="text-white hover:text-[color:var(--primary-1)] py-4 px-6"
    />
  );
};
