import Image from "next/image";

import { Hero1, Hero2, Hero3, Hero4, HeroImage } from "@/assets";
import { HeroLinkButton } from "./section-chunks-client";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-between gap-[20px] w-[90%] h-auto py-[10px] 2xl:max-w-[1400px]">
      <div className="relative flex flex-col justify-center w-[calc(100%-600px-20px)] max-w-[600px] h-[580px]">
        <div className="flex flex-col">
          <h1 className="font-sansita text-[40px] leading-[1] mb-[40px]">
            Xenrir - Discover Your Fashion Essence, Embrace Limitless Style!
          </h1>
          <h3 className="leading-[1] text-[18px]">
            Welcome to Xenrir, the ultimate fashion destination for trendsetters
            who want to redefine their style and unlock incredible rewards along
            the way!
          </h3>
        </div>
        <div className="absolute bottom-0 flex justify-between gap-2 flex-wrap w-full self-end">
          <Image
            src={Hero1}
            alt="Hero Image"
            width={92}
            height={30}
            priority
            draggable={false}
          />
          <Image
            src={Hero2}
            alt="Hero Image"
            width={92}
            height={30}
            priority
            draggable={false}
          />
          <Image
            src={Hero3}
            alt="Hero Image"
            width={92}
            height={30}
            priority
            draggable={false}
          />
          <Image
            src={Hero4}
            alt="Hero Image"
            width={92}
            height={30}
            priority
            draggable={false}
          />
        </div>
        <div className="flex mt-[50px]">
          <HeroLinkButton />
        </div>
      </div>
      <div className="relative flex items-center justify-center w-[550px]">
        <div className="absolute bg-[color:var(--bg-2)] w-[calc(100%)] translate-y-[10px] aspect-square rounded-full"></div>
        <div className="relative flex items-center justify-center w-[420px] h-[580px]">
          <Image
            src={HeroImage}
            alt="Hero Image"
            fill
            priority
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
