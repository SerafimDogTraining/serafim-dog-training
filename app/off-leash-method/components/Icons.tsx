type IconProps = { className?: string };

export function CheckIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="4 11 8 15 16 6" />
    </svg>
  );
}

export function CrossIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="5" x2="15" y2="15" />
      <line x1="15" y1="5" x2="5" y2="15" />
    </svg>
  );
}

/** Pillar 1 — Neutrality: a calm horizon / balance line */
export function NeutralityIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="14" />
      <line x1="6" y1="20" x2="34" y2="20" />
      <path d="M12 20a8 8 0 0116 0" />
    </svg>
  );
}

/** Pillar 2 — Safety Net: woven net */
export function SafetyNetIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 10h28" />
      <path d="M10 10v10a10 10 0 0020 0V10" />
      <path d="M20 10v20" />
      <path d="M11 20h18" />
      <path d="M13 26h14" />
    </svg>
  );
}

/** Pillar 3 — Conditioned Release: an opening / released latch */
export function ReleaseIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="9" y="19" width="22" height="14" rx="2" />
      <path d="M14 19v-5a6 6 0 0112 0" />
      <line x1="20" y1="24" x2="20" y2="28" />
    </svg>
  );
}

export function GuaranteeIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 5l12 4v10c0 8-5.2 13.6-12 16-6.8-2.4-12-8-12-16V9l12-4z" />
      <polyline points="14.5 19.5 18.5 23.5 26 15.5" />
    </svg>
  );
}
