import Image from "next/image";

import { TopHeaderComponent } from "../components";
import { Promo1, Promo2, Promo3 } from "@/assets";

const PromotionSection = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-[20px] w-[90%] h-auto pt-[80px] pb-[10px] 2xl:max-w-[1400px]">
      <TopHeaderComponent title="Promotion" desc="Our Promotions Events" />
      <div className="flex items-center justify-center w-full mt-[30px]">
        <div className="grid grid-cols-12 grid-rows-4 w-full items-center justify-center gap-5">
          <div className="col-span-6 row-span-4 flex flex-col gap-5 items-center justify-center w-full">
            <div className="flex row-span-2 justify-between items-center w-full rounded-sm px-5 py-3 bg-[color:var(--secondary-1)] h-[210px] overflow-hidden">
              <div className="flex flex-col w-full">
                <div className="font-mochiy text-[25px] leading-[1] mb-1">
                  GET UPTO 60%
                </div>
                <div className="text-[18px] leading-[1]">
                  For the summer season
                </div>
              </div>
              <div className="relative h-[210px] w-[400px]">
                <Image
                  src={Promo1}
                  alt="For Summer Season Image"
                  fill
                  draggable={false}
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center row-span-2 w-full rounded-sm px-6 py-8 bg-[color:var(--secondary-3)]">
              <h1 className="font-mochiy text-[35px] leading-[1] mb-8 text-white">
                GET 30% OFF
              </h1>
              <p className="text-[14px] leading-[1] text-white mb-1">
                USE PROMO CODE
              </p>
              <h3 className="font-pridi text-[28px] leading-[1] py-1 px-3 cursor-pointer text-white rounded-lg bg-black/20">
                XENRIRSALE
              </h3>
            </div>
          </div>
          <div className="col-span-3 row-span-4 flex flex-col items-center justify-center w-full h-full overflow-hidden max-h-[500px]">
            <div className="flex flex-col row-span-4 w-full rounded-sm px-3 py-6 h-full bg-[color:var(--accent-2)]">
              <div>
                <h1 className="text-[16px] mb-1 leading-[1]">
                  Flex Sweatshirt
                </h1>
                <div className="text-[22px] flex gap-3">
                  <p style={{ textDecoration: "line-through" }}>$100.00</p>
                  <p className="font-black">$75.00</p>
                </div>
              </div>
              <div className="relative flex justify-center h-[315px] aspect-auto">
                <Image
                  src={Promo2}
                  alt="Flex Sweatshirt"
                  fill
                  draggable={false}
                  className="translate-y-[25px]"
                />
              </div>
            </div>
          </div>
          <div className="col-span-3 row-span-4 flex flex-col items-center justify-center w-full h-full overflow-hidden max-h-[500px]">
            <div className="flex flex-col row-span-4 w-full rounded-sm px-3 py-6 h-full bg-[color:var(--secondary-2)]">
              <div>
                <h1 className="text-[16px] mb-1 leading-[1]">
                  Flex Push Button Bomber
                </h1>
                <div className="text-[22px] flex gap-3">
                  <p style={{ textDecoration: "line-through" }}>$225.00</p>
                  <p className="font-black">$190.00</p>
                </div>
              </div>
              <div className="relative flex justify-center h-[315px] aspect-auto">
                <Image
                  src={Promo3}
                  alt="Flex Push Button Bomber"
                  fill
                  draggable={false}
                  className="translate-y-[25px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
