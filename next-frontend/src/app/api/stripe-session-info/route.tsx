import { NextRequest, NextResponse } from "next/server";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const sessId = searchParams.get("order_id");

  try {
    // console.log(sessId);
    const data = await stripe.checkout.sessions.listLineItems(sessId!, {
      expand: ["data.price.product"],
    });
    // console.log(data);
    return NextResponse.json({ data: data }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
};
