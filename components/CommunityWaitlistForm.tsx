'use client'

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function CommunityWaitlistForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("https://formspree.io/f/xvzdyzvw", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(e.currentTarget),
    });

    if (res.ok) {
      router.push("/community/thank-you");
    } else {
      setLoading(false);
      setError(true);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="first-name"
            className="block text-xs font-medium text-charcoal uppercase tracking-[0.12em] mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            name="first_name"
            required
            className="w-full px-4 py-3 border border-offwhite-soft rounded-sm text-sm text-charcoal placeholder:text-charcoal-muted focus:outline-none focus:border-forest transition-colors duration-200"
            placeholder="Jane"
          />
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="block text-xs font-medium text-charcoal uppercase tracking-[0.12em] mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            name="last_name"
            required
            className="w-full px-4 py-3 border border-offwhite-soft rounded-sm text-sm text-charcoal placeholder:text-charcoal-muted focus:outline-none focus:border-forest transition-colors duration-200"
            placeholder="Smith"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-xs font-medium text-charcoal uppercase tracking-[0.12em] mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-offwhite-soft rounded-sm text-sm text-charcoal placeholder:text-charcoal-muted focus:outline-none focus:border-forest transition-colors duration-200"
          placeholder="jane@example.com"
        />
      </div>
      {error && (
        <p className="text-sm text-red-600 font-light">
          Something went wrong. Please try again.
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full text-sm tracking-wide px-6 py-3.5 bg-forest text-white hover:bg-forest-light transition-colors duration-200 font-semibold rounded-sm mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting…" : "Reserve My Founding Spot"}
      </button>
    </form>
  );
}
