"use client";

import { FaArrowRight } from "react-icons/fa";

import LinkButton from "@/app/components/link-button";

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
