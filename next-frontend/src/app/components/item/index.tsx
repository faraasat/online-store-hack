import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { IProducts } from "@/app/types";
import { AddToCartButton } from "./cart-btn-client";

interface IPro {
  pro: IProducts;
}

const Item: FC<IPro> = ({ pro }) => {
  return (
    <div className="col-span-1 flex flex-col max-w-[400px] hover:scale-[1.05] transition-all duration-[0.5s]">
      <Link
        className="w-full flex flex-col items-center justify-center"
        href={`/products/product/${pro._id}`}
      >
        <div className="relative flex items-center justify-center w-full h-[400px] rounded-lg mt-4">
          <Image
            src={pro.images[0]}
            alt={pro.alt[0]}
            fill
            className="object-cover rounded-lg"
            draggable={false}
          />
        </div>
        <h1 className="font-sansita text-[22px] text-center">{pro.name}</h1>
        <p className="text-center text-[20px] leading-[1]">{pro.productType}</p>
        <p className="text-center text-[20px] leading-[1] mt-[2px] font-bold">
          ${pro.price}
        </p>
      </Link>
      <div className="self-center flex mt-[15px]">
        <AddToCartButton products={pro} />
      </div>
    </div>
  );
};

export default Item;
