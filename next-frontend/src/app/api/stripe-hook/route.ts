import { NextRequest, NextResponse } from "next/server";

import Stripe from "stripe";

import {
  db,
  orderItem,
  orderItemTableCreation,
  orders,
  ordersTableCreation,
} from "@/app/drizzle";
import { eq } from "drizzle-orm";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!;
// const webhookSecret: string = "whsec_2tZrbgMl6tvvqnYlahPxv8RPGlV6cpgl";

interface IPayAuth {
  username: string;
  userid: string;
  sessionid: string;
}

interface IOrder extends IPayAuth {
  stripesessionid: string;
  shippingcity: string;
  shippingcountry: string;
  shippingline1: string;
  shippingline2: string;
  shippingstate: string;
  shippingpostalcode: string;
  customerinputname: string;
  shippingphone: string;
  shippingcarrier: string;
  shippingtrackingnumber: string;
  shippingcost: number;
  customerphone: string;
  customeremail: string;
  totalamount: number;
}

const constructProductObj = (proObj: Array<Stripe.LineItem>) => {
  return proObj.map((pro) => {
    const product = pro.price?.product as Stripe.Product;
    const price = pro.price as Stripe.Price;
    return {
      quantity: pro.quantity!,
      name: product.name!,
      currency: pro.currency!,
      price: `${price.unit_amount! / 100}`,
      totalprice: `${pro.quantity! * (price.unit_amount! / 100)}`,
      sized: product.metadata.size,
      brand: product.metadata.brand,
      productid: product.metadata._id,
      image: product.images[0],
    };
  });
};

const webhookHandler = async (req: NextRequest) => {
  try {
    const buf = await req.text();
    const sig = req.headers.get("stripe-signature")!;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      if (err! instanceof Error) console.log(err);
      console.log(`❌ Error message: ${errorMessage}`);

      return NextResponse.json(
        {
          error: {
            message: `Webhook Error: ${errorMessage}`,
          },
        },
        { status: 400 }
      );
    }

    switch (event.type) {
      case "checkout.session.completed":
        try {
          const myData = await stripe.checkout.sessions.listLineItems(
            (event.data.object as Stripe.Invoice).id!,
            {
              expand: ["data.price.product"],
            }
          );
          const products = constructProductObj(myData.data);
          const userData: IOrder = {
            userid: (event.data.object as any).metadata!.userId,
            username: (event.data.object as any).metadata!.userName,
            sessionid: (event.data.object as any).metadata!.sessionId,
            stripesessionid: (event.data.object as Stripe.Invoice).id!,
            shippingcity: (event.data.object as Stripe.Invoice).shipping_details
              ?.address?.city!,
            shippingcountry: (event.data.object as Stripe.Invoice)
              .shipping_details?.address?.country!,
            shippingline1: (event.data.object as Stripe.Invoice)
              .shipping_details?.address?.line1!,
            shippingline2: (event.data.object as Stripe.Invoice)
              .shipping_details?.address?.line2!,
            shippingpostalcode: (event.data.object as Stripe.Invoice)
              .shipping_details?.address?.postal_code!,
            shippingstate: (event.data.object as Stripe.Invoice)
              .shipping_details?.address?.state!,
            shippingphone: (event.data.object as Stripe.Invoice)
              .shipping_details?.phone!,
            shippingcarrier: (event.data.object as Stripe.Invoice)
              .shipping_details?.carrier!,
            customerinputname: (event.data.object as Stripe.Invoice)
              .shipping_details?.name!,
            shippingtrackingnumber: (event.data.object as Stripe.Invoice)
              .shipping_details?.tracking_number!,
            shippingcost: (event.data.object as Stripe.Invoice).shipping_cost
              ?.amount_total!,
            customerphone: (event.data.object as any).customer_details.phone!,
            customeremail: (event.data.object as any).customer_details.email!,
            totalamount: (event.data.object as any).amount_total! / 100,
          };
          // console.log(products);
          // console.log(userData);
          await db.execute(ordersTableCreation);
          await db.execute(orderItemTableCreation);
          const orderRes = await db
            .select()
            .from(orders)
            .where(
              eq(
                orders.stripesessionid,
                (event.data.object as Stripe.Invoice).id!
              )
            );
          if (orderRes && orderRes.length === 0) {
            const orderInsert = await db
              .insert(orders)
              .values({
                ...userData,
                shipmentstatus: "Processing",
              })
              .returning();
            // console.log(orderInsert[0].id);
            const orderItemInsert = await db
              .insert(orderItem)
              .values(
                products.map((pro) => {
                  return { ...pro, orderid: orderInsert[0].id };
                })
              )
              .returning();
            // console.log(orderItemInsert);
          }
        } catch (err) {
          console.log(err);
          return NextResponse.json(
            {
              error: {
                message: `List Item Error: ${err}`,
              },
            },
            { status: 400 }
          );
        }
        break;
      default:
        break;
    }

    return NextResponse.json({ received: true });
  } catch {
    return NextResponse.json(
      {
        error: {
          message: `Method Not Allowed`,
        },
      },
      { status: 405 }
    ).headers.set("Allow", "POST");
  }
};

export { webhookHandler as POST };
