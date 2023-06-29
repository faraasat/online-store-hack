"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaWineGlass } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { IoMdReturnLeft } from "react-icons/io";

import { cancelOrderQuery, getOrder, getOrderProducts } from "./server";
import { OrderItem, Orders } from "@/app/drizzle";
import { CustomButton } from "@/app/components/button";
import LinkButton from "@/app/components/link-button";

export const OrderDetails = ({ orderId }: { orderId: number }) => {
  const [orderData, setOrderData] = useState<Array<Orders>>([]);
  const [productsData, setProductsData] = useState<Array<OrderItem>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [cancelLoading, setCancelLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const [orderD, orderP]: [Array<Orders>, Array<OrderItem>] =
          await Promise.all([getOrder(orderId!), getOrderProducts(orderId!)]);
        setOrderData(orderD);
        setProductsData(orderP);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);

  const cancelOrder = async () => {
    setCancelLoading(true);
    try {
      const coq: Array<Orders> = await cancelOrderQuery(orderId!);
      console.log(coq);
      let newData: Array<Orders> = [];
      if (coq.length > 0) {
        newData = orderData.map((od) => {
          if (coq[0].id === orderData[0].id) {
            return { ...od, shipmentstatus: "Cancelled" };
          }
          return od;
        });
      }
      console.log(newData);
      setOrderData(newData);
      setCancelLoading(false);
    } catch (error) {
      console.log(error);
      setCancelLoading(false);
    }
  };

  return (
    <div className="flex w-full min-h-[400px] items-center justify-center">
      {loading ? (
        <div className="flex items-center justify-center gap-4 font-mochiy text-[30px]">
          <AiOutlineLoading3Quarters className="animate-spin" />
          <h4>Loading Product Details...</h4>
        </div>
      ) : (
        <>
          {orderData && orderData.length === 0 ? (
            <div className="flex flex-col items-center text-center justify-center gap-4 font-mochiy text-[30px]">
              <FaWineGlass className="text-[50px]" />
              <h4>Booo!!! Invalid Product Id...</h4>
            </div>
          ) : (
            <div className="flex flex-col w-full gap-8">
              <div className="flex flex-col w-full self-start py-[30px] gap-6">
                <div
                  key={orderData[0].sessionid}
                  className="flex rounded-lg px-5 py-8 shadow-[0px_0px_5px_1px_rgba(var(--primary-1-color),0.2)] hover:scale-[1.03] transition-all duration-[0.5s] gap-4 items-center justify-between"
                >
                  <div className="col-span-2 flex flex-col text-center">
                    <div>Order Id: {orderData[0].id}</div>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-[20px] font-bold mb-[5px]">
                      Customer:
                    </h1>
                    <div>Placed By: {orderData[0].username}</div>
                    <div>Name: {orderData[0].customerinputname}</div>
                    <div>Email: {orderData[0].customeremail}</div>
                    <div>Phone: {orderData[0].customerphone}</div>
                    <div>Phone: {orderData[0].customerphone}</div>
                    <div>Total Amount: {orderData[0].totalamount}</div>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-[20px] font-bold mb-[5px]">
                      Shipping Info:
                    </h1>
                    <div>Line1: {orderData[0].shippingline1}</div>
                    <div>Line2: {orderData[0].shippingline2}</div>
                    <div>City: {orderData[0].shippingcity}</div>
                    <div>State: {orderData[0].shippingstate}</div>
                    <div>Country: {orderData[0].shippingcountry}</div>
                    <div>Postal Code: {orderData[0].shippingpostalcode}</div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div
                      className="flex py-2 px-4 rounded-full text-white"
                      style={{
                        backgroundColor:
                          orderData[0].shipmentstatus === "Processing"
                            ? "#34d399"
                            : orderData[0].shipmentstatus === "Cancelled"
                            ? "#ef4444"
                            : "#38bdf8",
                      }}
                    >
                      {orderData[0].shipmentstatus}
                    </div>
                    {orderData[0].shipmentstatus === "Processing" && (
                      <div>
                        <CustomButton
                          btnText="Cancel Order"
                          loading={cancelLoading}
                          disabled={cancelLoading}
                          showGradient={!cancelLoading}
                          Icon={{
                            Img: MdCancel,
                            position: "right",
                          }}
                          className="py-3 px-5"
                          onClick={cancelOrder}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-center justify-center w-full h-auto">
                <h1 className="flex text-center font-mochiy font-bold text-[35px] my-[20px]">
                  Products Ordered:
                </h1>
                {productsData.map((it: OrderItem, i) => {
                  return (
                    <div key={i} className="grid gap-x-3 grid-cols-12 w-full">
                      <div className="col-span-3 w-full aspect-square relative flex items-center justify-center overflow-hidden rounded-lg">
                        <Image
                          src={it.image}
                          alt={it.name}
                          fill
                          draggable={false}
                          className="object-cover rounded-lg hover:scale-[1.08] cursor-pointer transition-all duration-[0.6s]"
                          sizes="400px"
                        />
                      </div>
                      <div className="col-span-7 flex flex-col w-full">
                        <h1 className="font-sansita text-[35px] leading-[1]">
                          {it.name}
                        </h1>
                        <h1 className="font-pridi font-bold text-[35px] leading-[1]">
                          {it.brand ? it.brand : "No Brand"}
                        </h1>
                        <h3 className="text-[25px] leading-[1] mt-[30px] mb-[15px]">
                          Size: {it.sized}
                        </h3>
                        <h3 className="text-[25px] leading-[1] mb-[15px]">
                          Price: $ {it.price}
                        </h3>
                        <h3 className="text-[25px] leading-[1]">
                          Qty: {it.quantity}
                        </h3>
                      </div>
                      <div className="col-span-2 h-full w-full flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center font-mochiy text-[25px] font-bold leading-[1]">
                          <div>Total:</div>
                          <div>$ {it.totalprice}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-center w-full my-[10px]]">
                <hr className="border border-[1px_solid_var(--primary-1)] w-full" />
              </div>
              <div className="flex justify-end w-full font-mochiy text-[25px] my-[10px]">
                Grand Total: $ {orderData[0].totalamount}
              </div>
              <div className="flex items-center justify-center mt-[20px]">
                <LinkButton
                  href="/orders"
                  btnText="Return to Orders"
                  Icon={{
                    position: "right",
                    Img: IoMdReturnLeft,
                  }}
                  showGradient
                  className="px-5 py-3"
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
