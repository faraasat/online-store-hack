import Link from "next/link";

import { TfiFacebook, TfiLinkedin, TfiTwitterAlt } from "react-icons/tfi";

import { Logo } from "@/app/internal-assets";
import { smallNavigationData } from "@/data";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full bg-[color:rgba(var(--primary-1-color),0.05)]">
      <div className="flex flex-col items-center justify-center w-[90%] gap-[20px] py-[10px] 2xl:max-w-[1400px]">
        <div className="pt-[40px] pb-[10px] flex justify-between self-start w-full">
          <div className="flex flex-col items-center justify-center max-w-[450px]">
            <Logo className="w-[150px] h-auto" />
            <h1 className="text-[40px] leading-[1] font-sansita">Xenrir</h1>
            <p className="text-center text-[20px] mt-[20px] leading-[1.5]">
              Small, artisan label that offers a thoughtfully curated collection
              of high quality everyday essentials made.
            </p>
          </div>
          <div className="flex flex-col px-8">
            <h1 className="font-sansita text-[25px]">Quick Navigation</h1>
            <div className="mt-[25px] flex flex-col gap-[10px]">
              {smallNavigationData.map((snd) => (
                <Link href={snd.url} key={snd.name} className="flex gap-2">
                  <div>
                    <snd.Icon />
                  </div>
                  <div>{snd.name}</div>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col px-8">
            <h1 className="font-sansita text-[25px]">Social</h1>
            <div className="mt-[25px] flex gap-[20px] flex-wrap">
              <div className="w-[45px] h-[45px] rounded-full border border-[1px_solid_var(--primary-1)] flex items-center justify-center">
                <Link href="https://facebook.com" className="text-[25px]">
                  <TfiFacebook />
                </Link>
              </div>
              <div className="w-[45px] h-[45px] rounded-full border border-[1px_solid_var(--primary-1)] flex items-center justify-center">
                <Link href="https://twitter.com" className="text-[25px]">
                  <TfiTwitterAlt />
                </Link>
              </div>
              <div className="w-[45px] h-[45px] rounded-full border border-[1px_solid_var(--primary-1)] flex items-center justify-center">
                <Link href="https://linkedin.com" className="text-[25px]">
                  <TfiLinkedin />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="border border-[0.1px_solid_var(--primary-1)] w-full" />
        <div className="text-center text-[20px]">
          Copyright &copy; 2023. All Rights Reserved!
        </div>
      </div>
    </footer>
  );
};

export default Footer;
