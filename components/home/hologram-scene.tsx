export function HologramScene() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 812"
      className="absolute inset-0 hidden h-full w-full sm:block"
      preserveAspectRatio="xMaxYMid slice"
    >
      <defs>
        <linearGradient id="hero-ribbon" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#38bdf8" />
          <stop offset="0.35" stopColor="#a78bfa" />
          <stop offset="0.65" stopColor="#f472b6" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
        <filter id="hero-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g transform="translate(820,180) scale(1.15)">
        <path
          d="M200,20
             C260,20 300,70 300,140
             C300,190 285,220 300,240
             C340,270 380,330 380,420
             L380,900
             L20,900
             L20,420
             C20,330 60,270 100,240
             C115,220 100,190 100,140
             C100,70 140,20 200,20 Z"
          fill="rgba(255,255,255,0.09)"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="2"
        />
        <path
          d="M125,170 C95,210 90,270 130,310 C155,335 180,335 195,355"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M275,170 C305,210 310,270 270,310 C245,335 220,335 205,355"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        <circle
          cx="200"
          cy="370"
          r="17"
          fill="rgba(255,255,255,0.12)"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="3"
        />
      </g>

      <path
        d="M80 600
           C260 600 300 600 360 600
           L430 600
           L470 500
           L520 700
           L570 440
           L610 600
           C660 600 700 600 760 600
           C900 600 980 540 1080 560
           C1180 580 1260 520 1400 540"
        fill="none"
        stroke="url(#hero-ribbon)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#hero-glow)"
        className="[animation:ribbon-glow_5s_ease-in-out_infinite]"
      />
    </svg>
  );
}
