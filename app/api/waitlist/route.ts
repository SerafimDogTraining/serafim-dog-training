import { NextResponse } from "next/server";

const MAILERLITE_GROUP_ID = "185844112996435391";
const MAILERLITE_API = "https://connect.mailerlite.com/api";

// Set MAILERLITE_API_KEY in Vercel environment variables.

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email } = (await request.json()) as {
      firstName?: string;
      lastName?: string;
      email?: string;
    };

    if (!email || !firstName || !lastName) {
      return NextResponse.json(
        { error: "First name, last name, and email are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.MAILERLITE_API_KEY;
    if (!apiKey) {
      console.error("MAILERLITE_API_KEY is not set");
      return NextResponse.json(
        { error: "Waitlist service is not configured." },
        { status: 500 }
      );
    }

    const res = await fetch(`${MAILERLITE_API}/subscribers`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        fields: { name: firstName, last_name: lastName },
        groups: [MAILERLITE_GROUP_ID],
      }),
    });

    if (res.status !== 200 && res.status !== 201) {
      const text = await res.text();
      console.error("MailerLite error:", res.status, text);
      return NextResponse.json(
        { error: "Could not add you to the waitlist. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist handler error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
