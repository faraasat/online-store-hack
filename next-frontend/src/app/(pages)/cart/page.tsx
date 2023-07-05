import { Metadata } from "next";

import { TopHeaderComponent } from "@/app/components";
import { CartClient, CheckParams } from "./client";
import { ScrollToTop } from "@/app/utils";

export const metadata: Metadata = {
  title:
    "Your Cart - Xenrir - Discover Your Fashion Essence, Embrace Limitless Style!",
};

const ProductPage = async () => {
  return (
    <>
      <ScrollToTop />
      <CheckParams />
      <div className="flex w-full h-auto items-center justify-center">
        <section className="flex flex-col items-center justify-between gap-[20px] w-[90%] h-auto pt-[80px] pb-[170px] 2xl:max-w-[1400px]">
          <TopHeaderComponent title={"Cart"} desc="Check What You Have Added" />
          <CartClient />
        </section>
      </div>
    </>
  );
};

export default ProductPage;
