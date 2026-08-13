import { NextResponse } from "next/server";

// TODO: Replace with the real "Off-Leash Reliability Playbook" MailerLite group ID.
// No group ID for this list exists in the codebase or env config yet, so this
// falls back to the Handler's Playbook Subscribers group (same ID as /api/subscribe).
// Set MAILERLITE_OFF_LEASH_GROUP_ID in Vercel to point at the correct group.
const FALLBACK_GROUP_ID = "185771829837694751";
const MAILERLITE_API = "https://connect.mailerlite.com/api";

// Set MAILERLITE_API_KEY in Vercel environment variables.

export async function POST(request: Request) {
  try {
    const { firstName, email } = (await request.json()) as {
      firstName?: string;
      email?: string;
    };

    if (!email || !firstName) {
      return NextResponse.json(
        { error: "First name and email are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.MAILERLITE_API_KEY;
    if (!apiKey) {
      console.error("MAILERLITE_API_KEY is not set");
      return NextResponse.json(
        { error: "Subscription service is not configured." },
        { status: 500 }
      );
    }

    const groupId =
      process.env.MAILERLITE_OFF_LEASH_GROUP_ID || FALLBACK_GROUP_ID;

    const res = await fetch(`${MAILERLITE_API}/subscribers`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        fields: { name: firstName },
        groups: [groupId],
      }),
    });

    if (res.status !== 200 && res.status !== 201) {
      const text = await res.text();
      console.error("MailerLite error:", res.status, text);
      return NextResponse.json(
        { error: "Could not add you to the list. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Off-leash guide subscribe handler error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
