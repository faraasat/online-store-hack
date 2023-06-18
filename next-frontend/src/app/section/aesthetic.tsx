import Image from "next/image";

import { Feature } from "@/assets";
import { AestheticLinkButton } from "./section-chunks-client";

const AestheticSection = () => {
  return (
    <section className="relative flex items-center justify-center pt-[150px] pb-[10px] w-full h-auto">
      <div className="absolute bg-[color:rgba(var(--bg-2-color),0.3)] w-full h-[110%] z-[100]"></div>
      <div className="relative flex justify-between gap-[20px] w-[90%] mt-[40px] 2xl:max-w-[1400px]">
        <div className="relative flex items-center justify-center w-[calc(50%-10px)] z-[400]">
          <div className="absolute text-[7vw] font-mochiy leading-[1.1] z-[100] text-[color:rgba(var(--primary-1-color),0.03)] select-none">
            Different From Others
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-9 z-[400]">
            <div className="flex flex-col w-[90%]">
              <h1 className="font-bold text-[24px] leading-[1] mb-3">
                Using Good Quality Materials
              </h1>
              <p className="leading-[1] text-[22px] font-light">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex flex-col w-[90%]">
              <h1 className="font-bold text-[24px] leading-[1] mb-3">
                100% Handmade Products
              </h1>
              <p className="leading-[1] text-[22px] font-light">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex flex-col w-[90%]">
              <h1 className="font-bold text-[24px] leading-[1] mb-3">
                Modern Fashion Design
              </h1>
              <p className="leading-[1] text-[22px] font-light">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex flex-col w-[90%]">
              <h1 className="font-bold text-[24px] leading-[1] mb-3">
                Discount for Bulk Orders
              </h1>
              <p className="leading-[1] text-[22px] font-light">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col w-[calc(50%-10px)] z-[400]">
          <div className="w-[80%] absolute translate-y-[-120%] self-center">
            <h1 className="text-[40px] leading-[1.5] font-mochiy font-bold">
              Unique and Authentic Vintage Designer Jewellery
            </h1>
          </div>
          <div className="flex items-center justify-center gap-[30px]">
            <div className="relative h-[350px] w-[300px]">
              <Image src={Feature} alt="featured" fill draggable={false} />
            </div>
            <div className="flex flex-col gap-[20px] w-[calc(100%-350px-30px)]">
              <h1 className="leading-[1.3] text-[18px] text-justify">
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
              </h1>
              <div className="flex">
                <AestheticLinkButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AestheticSection;
