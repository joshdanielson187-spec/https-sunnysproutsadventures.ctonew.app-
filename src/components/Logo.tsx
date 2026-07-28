import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const dimensions = {
    sm: { width: 120, height: 44 },
    md: { width: 180, height: 66 },
    lg: { width: 240, height: 88 },
  };

  const { width, height } = dimensions[size];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 88"
      width={width}
      height={height}
      className={className}
      role="img"
      aria-label="Sunny Sprouts Adventures logo"
    >
      {/* Smiling Sun */}
      <circle cx="44" cy="44" r="28" fill="#FFD93D" />
      {/* Sun rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 44 + 32 * Math.cos(rad);
        const y1 = 44 + 32 * Math.sin(rad);
        const x2 = 44 + 40 * Math.cos(rad);
        const y2 = 44 + 40 * Math.sin(rad);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#FFD93D"
            strokeWidth="4"
            strokeLinecap="round"
          />
        );
      })}
      {/* Sun face */}
      <circle cx="35" cy="38" r="3" fill="#8B6914" />
      <circle cx="53" cy="38" r="3" fill="#8B6914" />
      <path
        d="M 35 50 Q 44 60 53 50"
        fill="none"
        stroke="#8B6914"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Small green sprouts at the base of the sun */}
      <path
        d="M 38 62 Q 35 50 32 40"
        fill="none"
        stroke="#7BC67E"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <ellipse cx="31" cy="38" rx="4" ry="3" fill="#7BC67E" />
      <path
        d="M 50 62 Q 53 50 56 40"
        fill="none"
        stroke="#7BC67E"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <ellipse cx="57" cy="38" rx="4" ry="3" fill="#7BC67E" />

      {/* Rainbow arc behind the text */}
      <path
        d="M 95 80 Q 140 20 220 80"
        fill="none"
        stroke="#FFB5C5"
        strokeWidth="4"
        opacity="0.5"
      />
      <path
        d="M 100 80 Q 140 28 215 80"
        fill="none"
        stroke="#B39DDB"
        strokeWidth="4"
        opacity="0.5"
      />
      <path
        d="M 105 80 Q 140 36 210 80"
        fill="none"
        stroke="#6EC6FF"
        strokeWidth="4"
        opacity="0.5"
      />

      {/* "Sunny Sprouts" text */}
      <text
        x="128"
        y="52"
        textAnchor="middle"
        fontFamily="Fredoka, Nunito, sans-serif"
        fontWeight="700"
        fontSize="16"
        fill="#5D4037"
      >
        Sunny Sprouts
      </text>

      {/* "Adventures" text */}
      <text
        x="128"
        y="72"
        textAnchor="middle"
        fontFamily="Fredoka, Nunito, sans-serif"
        fontWeight="500"
        fontSize="11"
        fill="#7BC67E"
      >
        Adventures
      </text>
    </svg>
  );
}
