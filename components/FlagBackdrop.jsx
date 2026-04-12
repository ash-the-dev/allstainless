export default function FlagBackdrop({
  variant = "light",
  className = "",
  svgId = "flag",
}) {
  const stripesId = `${svgId}-stripes`;
  const starsId = `${svgId}-stars`;
  const waveId = `${svgId}-wave`;
  const isDark = variant === "dark";

  return (
    <div
      className={`flagBackdrop ${isDark ? "flagBackdrop--dark" : ""} ${className}`.trim()}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1200 700" preserveAspectRatio="none" role="presentation">
        <defs>
          <pattern
            id={stripesId}
            width="1200"
            height="70"
            patternUnits="userSpaceOnUse"
          >
            {isDark ? (
              <>
                <rect width="1200" height="70" fill="#080808" />
                <rect y="0" width="1200" height="35" fill="#121212" />
              </>
            ) : (
              <>
                <rect width="1200" height="70" fill="rgba(255,255,255,0.0)" />
                <rect y="0" width="1200" height="35" fill="rgba(255,255,255,0.22)" />
              </>
            )}
          </pattern>

          <pattern id={starsId} width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M30 8 L36 24 L53 24 L39 34 L44 50 L30 40 L16 50 L21 34 L7 24 L24 24 Z"
              fill={
                isDark ? "rgba(255,255,255,0.035)" : "rgba(255,255,255,0.25)"
              }
            />
          </pattern>

          <filter id={waveId}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency={isDark ? "0.012" : "0.01"}
              numOctaves="2"
              seed="7"
            />
            <feDisplacementMap in="SourceGraphic" scale={isDark ? 22 : 18} />
          </filter>
        </defs>

        <rect
          x="0"
          y="0"
          width="1200"
          height="700"
          fill={`url(#${stripesId})`}
          filter={`url(#${waveId})`}
        />

        <rect
          x="0"
          y="0"
          width="520"
          height="370"
          fill={
            isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.12)"
          }
          filter={`url(#${waveId})`}
        />
        <rect
          x="0"
          y="0"
          width="520"
          height="370"
          fill={`url(#${starsId})`}
          opacity={isDark ? 0.95 : 0.9}
          filter={`url(#${waveId})`}
        />
      </svg>
    </div>
  );
}
