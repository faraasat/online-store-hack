import { Metadata } from "next";

import { TopHeaderComponent } from "@/app/components";
import { OrderLink } from "./client";

export const metadata: Metadata = {
  title:
    "My Orders - Xenrir - Discover Your Fashion Essence, Embrace Limitless Style!",
};

const OrdersPage = async () => {
  return (
    <div className="flex w-full min-h-[500px] h-full items-center justify-center">
      <section className="flex flex-col items-center justify-between gap-[20px] w-[90%] h-full pt-[80px] pb-[170px] 2xl:max-w-[1400px]">
        <TopHeaderComponent
          title={"Order Successful"}
          desc="Track Your Order"
        />
        <div className=" w-full h-[calc(100vh-350px)] min-h-[400px] flex gap-[30px] flex-col items-center justify-center">
          <h1 className="flex items-center max-w-[500px] text-center">
            Your Order has been Successfully Placed. Please Wait for
            Confirmation. After that it will Automatically appear on your
            Orders.
          </h1>
          <div className="flex items-center justify-center">
            <OrderLink />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrdersPage;
