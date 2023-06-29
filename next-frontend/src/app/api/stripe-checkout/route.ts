import { NextResponse } from "next/server";

import { Stripe } from "stripe";

import { allowedCountry } from "./allowed-countries";

import { ICart } from "@/app/types";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

interface IPayAuth {
  userName: string;
  userId: string;
  sessionId: string;
}

const getRedirectUrls = (
  host: string | null
): { success_url: string; cancel_url: string } => {
  let successUrl = "",
    cancelUrl = "",
    hostName = "",
    proto = "";
  if (host) {
    hostName = host;
  } else {
    if (process.env.NODE_ENV === "development") {
      hostName = "http://localhost:3000";
    } else {
      hostName =
        process.env.NEXT_PUBLIC_SITE_URL ??
        process.env.NEXT_PUBLIC_VERCEL_URL ??
        "https://xenrir.vercel.app";
    }
  }

  if (process.env.NODE_ENV === "development") {
    proto = "http";
  } else {
    proto = "https";
  }

  successUrl = `${proto}://${hostName}/orders/success?order_id={CHECKOUT_SESSION_ID}`;
  cancelUrl = `${proto}://${hostName}/cart?status=order-failed`;
  return { success_url: successUrl, cancel_url: cancelUrl };
};

export async function POST(req: Request) {
  const obj = await req.json();

  const hostname = req.headers.get("host");

  const cartItems = obj.cartItems as ICart[];
  const userAuth = obj.userAuth as IPayAuth;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      billing_address_collection: "required",
      invoice_creation: {
        enabled: true,
      },
      phone_number_collection: {
        enabled: true,
      },
      shipping_address_collection: {
        allowed_countries: allowedCountry as any,
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 0,
              currency: "usd",
            },
            display_name: "Free shipping",
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 5,
              },
              maximum: {
                unit: "business_day",
                value: 7,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 1500,
              currency: "usd",
            },
            display_name: "Next day air",
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 1,
              },
              maximum: {
                unit: "business_day",
                value: 1,
              },
            },
          },
        },
      ],
      line_items: cartItems.map((item: ICart) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: item.images,
            metadata: {
              size: item.sized,
              _id: item._id,
              brand: item.brand,
            },
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
        },
      })),
      metadata: { ...userAuth },
      // automatic_tax: {
      //   enabled: true,
      // },
      mode: "payment",
      ...getRedirectUrls(hostname),
    });

    return NextResponse.json({ sessionId: session.id }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create Stripe session" },
      { status: 500 }
    );
  }
}
