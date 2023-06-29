"use server";

import { eq } from "drizzle-orm";

import { db, orders } from "@/app/drizzle";

export const getOrders = async (userId: string) => {
  return await db.select().from(orders).where(eq(orders.userid, userId));
};

export const cancelOrderQuery = async (userId: string) => {
  return await db
    .update(orders)
    .set({ shipmentstatus: "Cancelled" })
    .where(eq(orders.userid, userId))
    .returning();
};
