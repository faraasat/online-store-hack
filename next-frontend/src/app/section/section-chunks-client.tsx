"use client";

import dynamic from "next/dynamic";

import { HiArrowRight, HiShoppingCart } from "react-icons/hi";

import {
  CustomButtonComponent,
  LinkButtonComponent,
  TextInputComponent,
} from "../components";

const TextInputComponentLoad = dynamic(
  () => import("../components").then((mod) => mod.TextInputComponent),
  {
    ssr: false,
    loading: () => (
      <TextInputComponent
        className="p-3 w-[280px]"
        disabled
        placeholder="Loading..."
      />
    ),
  }
);

export const HeroLinkButton = () => {
  return (
    <LinkButtonComponent
      btnText="Start Shopping"
      href="/products"
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
      href="/products"
      showGradient={true}
      Icon={{
        Img: HiShoppingCart,
        position: "right",
      }}
      className="text-white hover:text-[color:var(--primary-1)] py-4 px-6"
    />
  );
};

export const NewsletterContact = () => {
  return (
    <div
      className="flex justify-center items-center gap-[20px] z-[400]"
      suppressHydrationWarning
    >
      <TextInputComponentLoad
        className="p-3 w-[280px]"
        placeholder="Your Email"
        type="email"
      />
      <CustomButtonComponent
        btnText="Get Started"
        showGradient={true}
        Icon={{
          Img: HiArrowRight,
          position: "right",
        }}
        className="text-white hover:text-[color:var(--primary-1)] py-4 px-6"
      />
    </div>
  );
};
