"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useAuth } from "@clerk/nextjs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaWineGlass } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { BiSolidDetail } from "react-icons/bi";

import { cancelOrderQuery, getOrders } from "./server";
import { Orders } from "@/app/drizzle";
import { CustomButton } from "@/app/components/button";
import LinkButton from "@/app/components/link-button";

export const OrderList = () => {
  const { isLoaded, userId } = useAuth();
  const searchParam = useSearchParams();
  const router = useRouter();
  const [orderData, setOrderData] = useState<Array<Orders>>([]);
  const [filteredData, setFilteredData] = useState<Array<Orders>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [cancelLoading, setCancelLoading] = useState<boolean>(false);

  useEffect(() => {
    if (
      searchParam.get("filter") !== "All" &&
      searchParam.get("filter") !== "Processing" &&
      searchParam.get("filter") !== "Cancelled" &&
      searchParam.get("filter") !== "Shipped"
    ) {
      router.push("/orders?filter=All");
      setFilteredData([...orderData]);
    } else {
      if (searchParam.get("filter") === "All") {
        setFilteredData([...orderData]);
      } else {
        const myOrders: Orders[] = [];
        [...orderData].forEach((od) => {
          if (od.shipmentstatus === searchParam.get("filter"))
            myOrders.push(od);
        });
        setFilteredData(myOrders);
      }
    }
  }, [searchParam, orderData]);

  useEffect(() => {
    (async () => {
      if (isLoaded) {
        try {
          const data: Array<Orders> = await getOrders(userId!);
          setOrderData(data);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      }
    })();
  }, []);

  const cancelOrder = async () => {
    setCancelLoading(true);
    try {
      const coq: Array<Orders> = await cancelOrderQuery(userId!);
      console.log(coq);
      let newData: Array<Orders> = [];
      if (coq.length > 0) {
        newData = orderData.map((od) => {
          if (coq[0].id === od.id) {
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
    <div className="flex flex-col w-full items-center justify-center">
      <div className="flex items-center self-start gap-5 mb-[30px] mt-[35px]">
        <Link
          href="/orders?filter=All"
          className="py-3 px-5 rounded-md text-[22px]"
          style={{
            backgroundColor:
              searchParam.get("filter") !== "Processing" &&
              searchParam.get("filter") !== "Cancelled" &&
              searchParam.get("filter") !== "Shipped"
                ? "var(--accent-2)"
                : "var(--bg-2)",
          }}
        >
          All
        </Link>
        <Link
          href="/orders?filter=Processing"
          className="py-3 px-5 rounded-md text-[22px]"
          style={{
            backgroundColor:
              searchParam.get("filter") === "Processing"
                ? "var(--accent-2)"
                : "var(--bg-2)",
          }}
        >
          Processing
        </Link>
        <Link
          href="/orders?filter=Cancelled"
          className="py-3 px-5 rounded-md text-[22px]"
          style={{
            backgroundColor:
              searchParam.get("filter") === "Cancelled"
                ? "var(--accent-2)"
                : "var(--bg-2)",
          }}
        >
          Cancelled
        </Link>
        <Link
          href="/orders?filter=Shipped"
          className="py-3 px-5 rounded-md text-[22px]"
          style={{
            backgroundColor:
              searchParam.get("filter") === "Shipped"
                ? "var(--accent-2)"
                : "var(--bg-2)",
          }}
        >
          Shipped
        </Link>
      </div>
      {loading ? (
        <div className="flex items-center justify-center gap-4 font-mochiy text-[30px] pt-[60px]">
          <AiOutlineLoading3Quarters className="animate-spin" />
          <h4>Loading Orders...</h4>
        </div>
      ) : (
        <>
          {filteredData && filteredData.length === 0 ? (
            <div className="flex flex-col items-center text-center justify-center gap-4 font-mochiy text-[30px] pt-[60px]">
              <FaWineGlass className="text-[50px]" />
              <h4>Booo!!! Nothing In Here...</h4>
            </div>
          ) : (
            <div className="flex flex-col w-full self-start py-[30px] gap-6">
              {filteredData?.map((od) => {
                return (
                  <div
                    key={od.sessionid}
                    className="flex rounded-lg px-5 py-8 shadow-[0px_0px_5px_1px_rgba(var(--primary-1-color),0.2)] hover:scale-[1.03] transition-all duration-[0.5s] gap-4 items-center justify-between"
                  >
                    <div className="col-span-2 flex flex-col text-center">
                      <div>Order Id: {od.id}</div>
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-[20px] font-bold mb-[5px]">
                        Customer:
                      </h1>
                      <div>Placed By: {od.username}</div>
                      <div>Name: {od.customerinputname}</div>
                      <div>Email: {od.customeremail}</div>
                      <div>Phone: {od.customerphone}</div>
                      <div>Phone: {od.customerphone}</div>
                      <div>Total Amount: {od.totalamount}</div>
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-[20px] font-bold mb-[5px]">
                        Shipping Info:
                      </h1>
                      <div>Line1: {od.shippingline1}</div>
                      <div>Line2: {od.shippingline2}</div>
                      <div>City: {od.shippingcity}</div>
                      <div>State: {od.shippingstate}</div>
                      <div>Country: {od.shippingcountry}</div>
                      <div>Postal Code: {od.shippingpostalcode}</div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                      <div
                        className="flex py-2 px-4 rounded-full text-white"
                        style={{
                          backgroundColor:
                            od.shipmentstatus === "Processing"
                              ? "#34d399"
                              : od.shipmentstatus === "Cancelled"
                              ? "#ef4444"
                              : "#38bdf8",
                        }}
                      >
                        {od.shipmentstatus}
                      </div>
                      {od.shipmentstatus === "Processing" && (
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

                      <div>
                        <LinkButton
                          href={`/orders/${od.id}`}
                          btnText="View Details"
                          showGradient
                          Icon={{
                            Img: BiSolidDetail,
                            position: "right",
                          }}
                          className="py-3 px-5"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
};
