import Image from "next/image";

import { countryToCodeData, countryToEmojiData } from "@/data";

import { ICart } from "@/app/types";

import { UpdateCart } from "./client";

export const CartItem = ({ cart }: { cart: ICart[] }) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      {cart.map((crt) => {
        const countryCode = countryToCodeData.get(crt.origin) || "";

        const countryEmoji = countryToEmojiData.get(countryCode);
        return (
          <div
            key={crt._id + crt.sized}
            className="grid gap-x-3 grid-cols-12 w-full"
          >
            <div className="col-span-3 w-full aspect-square relative flex items-center justify-center overflow-hidden rounded-lg">
              <Image
                src={crt.images[0]}
                alt={crt.alt[0]}
                fill
                draggable={false}
                className="object-cover rounded-lg hover:scale-[1.08] cursor-pointer transition-all duration-[0.6s]"
                sizes="400px"
              />
            </div>
            <div className="col-span-9 flex flex-col w-full">
              <h1 className="font-sansita text-[35px] leading-[1]">
                {crt.name}
              </h1>
              <h1 className="font-pridi font-bold text-[35px] leading-[1]">
                {crt.brand}
              </h1>
              <h3 className="flex flex-col mt-[20px]">
                <div className="text-[25px] font-bold leading-[1]">
                  Delivers From:
                </div>
                <div className="flex items-center gap-[10px]">
                  {countryEmoji && countryEmoji.image && (
                    <div className="relative w-[50px] h-[50px]">
                      <Image
                        src={countryEmoji.image}
                        alt={crt.origin}
                        fill
                        draggable={false}
                        sizes="50px"
                      />
                    </div>
                  )}
                  <div className="text-[22px] font-sansita font-bold">
                    {crt.origin}
                  </div>
                </div>
              </h3>
              <h3 className="text-[25px]">Size: {crt.sized}</h3>
              <UpdateCart cart={crt} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
