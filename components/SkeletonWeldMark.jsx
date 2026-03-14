// components/SkeletonWeldMark.jsx
export default function SkeletonWeldMark({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      style={{ flex: "0 0 auto" }}
    >
      <path
        d="M12 44 C14 30, 20 20, 30 16 C40 12, 52 18, 52 30 C52 42, 40 52, 28 50 C20 48, 14 46, 12 44Z"
        stroke="rgba(244,244,244,0.75)"
        strokeWidth="2"
      />
      <path
        d="M22 44 L28 26 M28 26 L36 30 M28 26 L24 18"
        stroke="rgba(244,244,244,0.9)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M38 33 L52 40"
        stroke="rgba(244,244,244,0.9)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* sparks */}
      <path d="M53 38 L60 35" stroke="rgba(244,244,244,0.55)" strokeWidth="2" strokeLinecap="round" />
      <path d="M54 42 L61 44" stroke="rgba(244,244,244,0.45)" strokeWidth="2" strokeLinecap="round" />
      <path d="M50 44 L54 50" stroke="rgba(244,244,244,0.38)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}