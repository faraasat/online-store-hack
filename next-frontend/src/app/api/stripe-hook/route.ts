import { NextRequest, NextResponse } from "next/server";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

// const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!;
const webhookSecret: string = "whsec_2tZrbgMl6tvvqnYlahPxv8RPGlV6cpgl";

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

    console.log("✅ Success:", event);

    const stData = event.data.object as any;

    let productsData: unknown;

    try {
      productsData = await stripe.checkout.sessions.listLineItems(stData.id, {
        expand: ["data.price.product"],
      });
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

    switch (event.type) {
      case "customer.subscription.created":
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
