import { Metadata } from "next";

import { TopHeaderComponent } from "@/app/components";
import { CheckOrderParams, OrderLink } from "./client";

export const metadata: Metadata = {
  title:
    "Order Success - Xenrir - Discover Your Fashion Essence, Embrace Limitless Style!",
};

const OrdersPage = async () => {
  return (
    <div className="flex w-full min-h-[500px] h-auto items-center justify-center">
      <section className="flex flex-col items-center justify-between gap-[40px] w-[90%] h-auto pt-[80px] pb-[170px] 2xl:max-w-[1400px]">
        <TopHeaderComponent
          title={"Order Successful"}
          desc="Track Your Order"
        />
        <div className=" w-full h-auto min-h-[400px] flex gap-[30px] flex-col items-center justify-center">
          <h1 className="flex items-center max-w-[500px] text-center">
            Your Order has been Successfully Placed. Please Wait for
            Confirmation. After that it will Automatically appear on your
            Orders. You have Ordered Following:
          </h1>
          <div className="min-h-[250px] h-auto w-full flex items-center justify-center">
            <CheckOrderParams />
          </div>
          <div className="flex items-center justify-center">
            <OrderLink />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrdersPage;
