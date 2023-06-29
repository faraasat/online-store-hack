"use server";

import { eq } from "drizzle-orm";

import { db, orderItem, orders } from "@/app/drizzle";

export const getOrder = async (orderId: number) => {
  return await db.select().from(orders).where(eq(orders.id, orderId));
};

export const getOrderProducts = async (orderId: number) => {
  return await db
    .select()
    .from(orderItem)
    .where(eq(orderItem.orderid, orderId));
};

export const cancelOrderQuery = async (orderId: number) => {
  return await db
    .update(orders)
    .set({ shipmentstatus: "Cancelled" })
    .where(eq(orders.id, orderId))
    .returning();
};
