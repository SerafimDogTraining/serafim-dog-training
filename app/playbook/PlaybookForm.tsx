"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PlaybookForm() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        setError(data?.error ?? "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }

      router.push("/playbook/thank-you");
    } catch {
      setError("Network error. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-[11px] uppercase tracking-[0.18em] text-charcoal-muted font-medium mb-2"
          >
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            required
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-3 bg-offwhite border border-offwhite-soft text-charcoal text-sm font-light rounded-sm focus:outline-none focus:border-forest focus:bg-white transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-[11px] uppercase tracking-[0.18em] text-charcoal-muted font-medium mb-2"
          >
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            required
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-3 bg-offwhite border border-offwhite-soft text-charcoal text-sm font-light rounded-sm focus:outline-none focus:border-forest focus:bg-white transition-colors"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-[11px] uppercase tracking-[0.18em] text-charcoal-muted font-medium mb-2"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-offwhite border border-offwhite-soft text-charcoal text-sm font-light rounded-sm focus:outline-none focus:border-forest focus:bg-white transition-colors"
        />
      </div>

      {error && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 px-3 py-2 rounded-sm">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full text-sm tracking-[0.14em] font-semibold uppercase px-6 py-4 bg-gold text-forest rounded-sm hover:bg-gold-light transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending…" : "Get My Free Playbook"}
      </button>

      <p className="text-xs text-charcoal-muted text-center font-light">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </form>
  );
}
