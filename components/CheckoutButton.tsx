"use client";

import { useState } from "react";

interface CheckoutButtonProps {
  program: string;
  label?: string;
  className?: string;
}

export default function CheckoutButton({
  program,
  label = "Enroll Now",
  className = "",
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ program }),
      });

      if (!res.ok) throw new Error("Checkout request failed");

      const { url } = await res.json();
      window.location.href = url;
    } catch {
      setError("Something went wrong. Please try again or contact us.");
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className={`${className} disabled:opacity-60 disabled:cursor-not-allowed transition-opacity duration-200`}
      >
        {loading ? "Redirecting to checkout..." : label}
      </button>
      {error && (
        <p className="text-red-600 text-sm mt-2 font-light">{error}</p>
      )}
    </div>
  );
}
