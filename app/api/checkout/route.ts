import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // Uses the latest API version at package install time
  typescript: true,
});

const PRICE_IDS: Record<string, string | undefined> = {
  "service-dog": process.env.STRIPE_PRICE_SERVICE_DOG,
  "behavioral-correction": process.env.STRIPE_PRICE_BEHAVIORAL,
  handler: process.env.STRIPE_PRICE_HANDLER,
  "handler-plan": process.env.STRIPE_PRICE_HANDLER_PLAN,
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { program } = body as { program: string };

    const priceId = PRICE_IDS[program];

    if (!priceId) {
      return NextResponse.json(
        { error: `Unknown program: ${program}` },
        { status: 400 }
      );
    }

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.serafimdogtraining.com";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${siteUrl}/book-a-consult?enrolled=true`,
      cancel_url: `${siteUrl}/programs/${program === "handler-plan" ? "handler" : program}`,
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
