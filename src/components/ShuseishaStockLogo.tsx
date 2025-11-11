interface ShuseishaStockLogoProps {
  className?: string;
  compact?: boolean;
}

export default function ShuseishaStockLogo({ className = "", compact = false }: ShuseishaStockLogoProps) {
  if (compact) {
    return (
      <svg
        viewBox="0 0 180 60"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="集英社STOCK"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1a365d', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        <rect x="2" y="8" width="3" height="44" fill="#1a365d" opacity="0.3" />
        <rect x="8" y="12" width="3" height="40" fill="#1a365d" opacity="0.4" />
        <rect x="14" y="6" width="3" height="48" fill="#1a365d" opacity="0.5" />

        <text
          x="25"
          y="40"
          fontFamily="'Noto Sans JP', 'Hiragino Kaku Gothic Pro', sans-serif"
          fontSize="24"
          fontWeight="900"
          fill="url(#logoGradient)"
          letterSpacing="1"
        >
          集英社
        </text>

        <text
          x="25"
          y="55"
          fontFamily="'Roboto', 'Arial', sans-serif"
          fontSize="16"
          fontWeight="800"
          fill="#dc2626"
          letterSpacing="2"
        >
          STOCK
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 320 80"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="集英社STOCK"
    >
      <defs>
        <linearGradient id="logoGradientFull" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#1a365d', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
        </linearGradient>

        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#dc2626', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#b91c1c', stopOpacity: 1 }} />
        </linearGradient>

        <filter id="shadow">
          <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.2"/>
        </filter>
      </defs>

      <g id="bookSpines">
        <rect x="4" y="15" width="6" height="50" fill="#1a365d" opacity="0.25" rx="1" />
        <rect x="14" y="20" width="6" height="45" fill="#1a365d" opacity="0.35" rx="1" />
        <rect x="24" y="12" width="6" height="56" fill="#1a365d" opacity="0.45" rx="1" />
        <rect x="34" y="18" width="6" height="48" fill="#2563eb" opacity="0.3" rx="1" />
      </g>

      <g id="mainText" filter="url(#shadow)">
        <text
          x="55"
          y="52"
          fontFamily="'Noto Sans JP', 'Hiragino Kaku Gothic Pro', 'Yu Gothic', sans-serif"
          fontSize="36"
          fontWeight="900"
          fill="url(#logoGradientFull)"
          letterSpacing="2"
        >
          集英社
        </text>

        <text
          x="200"
          y="52"
          fontFamily="'Roboto', 'Arial', sans-serif"
          fontSize="32"
          fontWeight="800"
          fill="url(#accentGradient)"
          letterSpacing="3"
        >
          STOCK
        </text>
      </g>

      <g id="chartAccent" opacity="0.4">
        <polyline
          points="50,70 70,65 90,68 110,62 130,66"
          stroke="#2563eb"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="70" r="2" fill="#2563eb" />
        <circle cx="70" cy="65" r="2" fill="#2563eb" />
        <circle cx="90" cy="68" r="2" fill="#2563eb" />
        <circle cx="110" cy="62" r="2" fill="#2563eb" />
        <circle cx="130" cy="66" r="2" fill="#2563eb" />
      </g>

      <line x1="48" y1="58" x2="315" y2="58" stroke="#dc2626" strokeWidth="1.5" opacity="0.3" />
    </svg>
  );
}
