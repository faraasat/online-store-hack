import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

import { InferModel, sql } from "drizzle-orm";

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  userid: text("userid").notNull(),
  username: text("username").notNull(),
  sessionid: text("sessionid").notNull(),
  stripesessionid: text("stripesessionid").notNull(),
  shippingcity: text("shippingcity"),
  shippingcountry: text("shippingcountry"),
  shippingline1: text("shippingline1"),
  shippingline2: text("shippingline2"),
  shippingpostalcode: text("shippingpostalcode"),
  shippingstate: text("shippingstate"),
  shippingphone: text("shippingphone"),
  shippingcarrier: text("shippingcarrier"),
  customerinputname: text("customerinputname"),
  shippingtrackingnumber: text("shippingtrackingnumber"),
  shippingcost: integer("shippingcost"),
  customerphone: text("customerphone"),
  customeremail: text("customeremail"),
  totalamount: integer("totalamount").notNull(),
  shipmentstatus: text("shipmentstatus").notNull(),
  createdat: timestamp("createdat").defaultNow().notNull(),
});

export const ordersTableCreation = sql`
  CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    userId TEXT NOT NULL,
    userName TEXT NOT NULL,
    sessionId TEXT NOT NULL,
    stripeSessionId TEXT NOT NULL,
    shippingCity TEXT,
    shippingCountry TEXT,
    shippingLine1 TEXT,
    shippingLine2 TEXT,
    shippingPostalCode TEXT,
    shippingState TEXT,
    shippingPhone TEXT,
    shippingCarrier TEXT,
    customerInputName TEXT,
    shippingTrackingNumber TEXT,
    shippingCost INTEGER,
    customerPhone TEXT,
    customerEmail TEXT,
    totalAmount INTEGER NOT NULL,
    shipmentStatus TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT NOW() NOT NULL
  );
`;

export const orderItem = pgTable("orderitem", {
  id: serial("id").primaryKey(),
  quantity: integer("quantity").notNull(),
  name: text("name").notNull(),
  currency: text("currency").notNull(),
  price: text("price").notNull(),
  totalprice: text("totalprice").notNull(),
  sized: text("sized"),
  brand: text("brand"),
  productid: text("productid").notNull(),
  image: text("image").notNull(),
  createdat: timestamp("createdat").defaultNow().notNull(),
  orderid: integer("orderid")
    .notNull()
    .references(() => orders.id),
});

export const orderItemTableCreation = sql`
  CREATE TABLE IF NOT EXISTS orderItem (
    id SERIAL PRIMARY KEY,
    quantity INTEGER NOT NULL,
    name TEXT NOT NULL,
    currency TEXT NOT NULL,
    price TEXT NOT NULL,
    totalPrice TEXT NOT NULL,
    sized TEXT,
    brand TEXT,
    productId TEXT NOT NULL,
    image TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT NOW() NOT NULL,
    orderId INTEGER NOT NULL REFERENCES orders (id)
  );
`;

export type Orders = InferModel<typeof orders, "select">;
export type NewOrders = InferModel<typeof orders, "insert">;
export type OrderItem = InferModel<typeof orderItem, "select">;
export type NewOrderItem = InferModel<typeof orderItem, "insert">;
