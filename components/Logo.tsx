/** "MS" monogram, shared by the header, intro loader and favicon artwork. */
export function Logo({className}: {className?: string}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--accent)" />
          <stop offset="1" stopColor="var(--accent-2)" />
        </linearGradient>
      </defs>
      <path
        className="logo-m"
        pathLength={1}
        d="M14 44V20l10 14 10-14v24"
        stroke="url(#logo-g)"
        strokeWidth="5"
      />
      <path
        className="logo-s"
        pathLength={1}
        d="M51 23.5c-1.6-2.3-4-3.5-6.6-3.5-3.4 0-5.9 1.9-5.9 4.9 0 6.6 13 4.1 13 11.4 0 3.2-2.8 5.7-6.7 5.7-3 0-5.5-1.3-7-3.6"
        stroke="currentColor"
        strokeWidth="4.5"
      />
    </svg>
  );
}
