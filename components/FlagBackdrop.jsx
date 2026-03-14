// components/FlagBackdrop.jsx
export default function FlagBackdrop() {
  return (
    <div className="flagBackdrop" aria-hidden="true">
      <svg viewBox="0 0 1200 700" preserveAspectRatio="none" role="presentation">
        <defs>
          <pattern id="stripes" width="1200" height="70" patternUnits="userSpaceOnUse">
            <rect width="1200" height="70" fill="rgba(255,255,255,0.0)" />
            <rect y="0" width="1200" height="35" fill="rgba(255,255,255,0.22)" />
          </pattern>

          <pattern id="stars" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M30 8 L36 24 L53 24 L39 34 L44 50 L30 40 L16 50 L21 34 L7 24 L24 24 Z"
              fill="rgba(255,255,255,0.25)"
            />
          </pattern>

          <filter id="wave">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="2" seed="7" />
            <feDisplacementMap in="SourceGraphic" scale="18" />
          </filter>
        </defs>

        {/* Stripes */}
        <rect x="0" y="0" width="1200" height="700" fill="url(#stripes)" filter="url(#wave)" />

        {/* Canton */}
        <rect x="0" y="0" width="520" height="370" fill="rgba(255,255,255,0.12)" filter="url(#wave)" />
        <rect x="0" y="0" width="520" height="370" fill="url(#stars)" opacity="0.9" filter="url(#wave)" />
      </svg>
    </div>
  );
}