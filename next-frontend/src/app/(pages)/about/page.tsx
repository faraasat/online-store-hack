import Image from "next/image";
import { Metadata } from "next";

import { TopHeaderComponent } from "@/app/components";
import { About } from "@/assets";
import { aboutData } from "@/data/data";

export const metadata: Metadata = {
  title:
    "About Us - Xenrir - Discover Your Fashion Essence, Embrace Limitless Style!",
};

const AboutPage = () => {
  return (
    <section className="flex items-center justify-center w-full pt-[20px] pb-[80px]">
      <div className="flex flex-col items-center justify-between gap-[20px] w-[90%] h-auto pt-[80px] pb-[10px] 2xl:max-w-[1400px]">
        <TopHeaderComponent title="About" desc="What We are?" />
        <div className="flex items-start justify-center w-full gap-[30px] mt-[30px]">
          <div className="flex w-[100%-500px-30px]">
            <div className="relative w-[500px] h-[700px]">
              <Image
                src={About}
                alt="about image"
                fill
                draggable={false}
                style={{ objectFit: "cover" }}
                placeholder="blur"
              />
            </div>
          </div>
          <div className="w-[100%-500px-30px]">
            {aboutData.map((ad, i) => (
              <p key={i} className="text-[20px] mb-[20px]">
                {ad}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
