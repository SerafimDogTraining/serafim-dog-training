import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check Your Email | Serafim Dog Training",
  description:
    "Your Off-Leash Reliability Playbook is on its way. Check your inbox.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OffLeashThankYouPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] flex items-center justify-center px-5 py-16">
      <div className="w-full max-w-[600px] text-center">
        <div className="w-12 h-px bg-[#B0883B] mx-auto mb-8" />

        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#16352B] leading-[1.15] mb-4">
          Check your email.
        </h1>

        <p className="text-base sm:text-lg font-light text-[#16352B]/80 leading-relaxed mb-4">
          Your Off-Leash Reliability Playbook is on its way.
        </p>

        <p className="text-sm font-light text-[#16352B]/60 mb-8">
          (If you don&apos;t see it in a few minutes, check your spam folder.)
        </p>

        <p className="text-[15px] font-light text-[#16352B]">— Arthur</p>
      </div>
    </div>
  );
}
