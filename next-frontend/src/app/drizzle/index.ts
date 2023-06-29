import { db } from "./connection";
import {
  orderItem,
  orders,
  ordersTableCreation,
  orderItemTableCreation,
} from "./order-schema";

import type {
  OrderItem,
  NewOrderItem,
  Orders,
  NewOrders,
} from "./order-schema";

export { db, orders, orderItem, orderItemTableCreation, ordersTableCreation };

export type { OrderItem, NewOrderItem, Orders, NewOrders };
