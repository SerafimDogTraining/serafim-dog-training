"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function OffLeashForm() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/off-leash-guide/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        setError(data?.error ?? "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }

      window.fbq?.("track", "Lead");
      router.push("/off-leash-guide/thank-you");
    } catch {
      setError("Network error. Please try again.");
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full px-4 py-3.5 bg-white border border-[#16352B]/20 text-[#16352B] text-base rounded-sm placeholder:text-[#16352B]/40 focus:outline-none focus:border-[#B0883B] transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label htmlFor="firstName" className="sr-only">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          required
          autoComplete="given-name"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </div>

      {error && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 px-3 py-2 rounded-sm">
          {error}
        </p>
      )}

      <div className="pt-1">
        <button
          type="submit"
          disabled={submitting}
          className="w-full text-sm tracking-[0.14em] font-semibold uppercase px-6 py-4 bg-[#B0883B] text-white rounded-sm hover:bg-[#c39c4b] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending…" : "Send me the playbook"}
        </button>
      </div>
    </form>
  );
}
