import React from "react";

interface AnimalAvatarProps {
  animal: "bear" | "rabbit" | "panda" | "owl" | "duck" | "turtle";
  color: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap: Record<string, number> = {
  sm: 60,
  md: 100,
  lg: 160,
  xl: 220,
};

export default function AnimalAvatar({
  animal,
  color,
  size = "md",
  className = "",
}: AnimalAvatarProps) {
  const px = sizeMap[size];

  const silhouettes: Record<string, React.ReactNode> = {
    bear: (
      <g transform="translate(50,50)">
        {/* Body */}
        <ellipse cx="0" cy="12" rx="20" ry="18" fill="white" />
        {/* Head */}
        <circle cx="0" cy="-10" r="14" fill="white" />
        {/* Ears */}
        <circle cx="-10" cy="-20" r="5" fill="white" />
        <circle cx="10" cy="-20" r="5" fill="white" />
        {/* Snout */}
        <ellipse cx="0" cy="-6" rx="6" ry="4" fill={color} opacity="0.3" />
        {/* Eyes */}
        <circle cx="-5" cy="-12" r="2" fill={color} />
        <circle cx="5" cy="-12" r="2" fill={color} />
        {/* Nose */}
        <ellipse cx="0" cy="-7" rx="2.5" ry="1.5" fill={color} />
        {/* Arms */}
        <ellipse cx="-18" cy="6" rx="6" ry="10" fill="white" transform="rotate(15,-18,6)" />
        <ellipse cx="18" cy="6" rx="6" ry="10" fill="white" transform="rotate(-15,18,6)" />
      </g>
    ),
    rabbit: (
      <g transform="translate(50,50)">
        {/* Body */}
        <ellipse cx="0" cy="10" rx="16" ry="20" fill="white" />
        {/* Head */}
        <circle cx="0" cy="-12" r="12" fill="white" />
        {/* Long ears */}
        <ellipse cx="-5" cy="-32" rx="4" ry="12" fill="white" />
        <ellipse cx="5" cy="-32" rx="4" ry="12" fill="white" />
        <ellipse cx="-5" cy="-32" rx="2" ry="9" fill={color} opacity="0.3" />
        <ellipse cx="5" cy="-32" rx="2" ry="9" fill={color} opacity="0.3" />
        {/* Cheeks */}
        <circle cx="-7" cy="-8" r="3" fill={color} opacity="0.15" />
        <circle cx="7" cy="-8" r="3" fill={color} opacity="0.15" />
        {/* Eyes */}
        <circle cx="-4" cy="-14" r="2" fill={color} />
        <circle cx="4" cy="-14" r="2" fill={color} />
        {/* Nose */}
        <ellipse cx="0" cy="-10" rx="2" ry="1.5" fill={color} />
        {/* Whiskers */}
        <line x1="-2" y1="-10" x2="-12" y2="-12" stroke={color} strokeWidth="0.8" opacity="0.5" />
        <line x1="-2" y1="-10" x2="-12" y2="-9" stroke={color} strokeWidth="0.8" opacity="0.5" />
        <line x1="2" y1="-10" x2="12" y2="-12" stroke={color} strokeWidth="0.8" opacity="0.5" />
        <line x1="2" y1="-10" x2="12" y2="-9" stroke={color} strokeWidth="0.8" opacity="0.5" />
      </g>
    ),
    panda: (
      <g transform="translate(50,50)">
        {/* Body */}
        <ellipse cx="0" cy="12" rx="20" ry="18" fill="white" />
        {/* Head */}
        <circle cx="0" cy="-10" r="15" fill="white" />
        {/* Ears */}
        <circle cx="-11" cy="-22" r="5" fill="#333" />
        <circle cx="11" cy="-22" r="5" fill="#333" />
        {/* Eye patches */}
        <ellipse cx="-6" cy="-12" rx="5" ry="4" fill="#333" />
        <ellipse cx="6" cy="-12" rx="5" ry="4" fill="#333" />
        {/* Eyes (white dots on patches) */}
        <circle cx="-6" cy="-12" r="1.5" fill="white" />
        <circle cx="6" cy="-12" r="1.5" fill="white" />
        {/* Nose */}
        <ellipse cx="0" cy="-7" rx="2.5" ry="2" fill={color} />
        {/* Arms */}
        <ellipse cx="-18" cy="6" rx="6" ry="12" fill="#333" transform="rotate(15,-18,6)" />
        <ellipse cx="18" cy="6" rx="6" ry="12" fill="#333" transform="rotate(-15,18,6)" />
        {/* Bamboo prop */}
        <rect x="16" y="-20" width="3" height="30" rx="1.5" fill="#7BC67E" />
        <ellipse cx="17.5" cy="-20" rx="4" ry="2" fill="#7BC67E" />
      </g>
    ),
    owl: (
      <g transform="translate(50,50)">
        {/* Body */}
        <ellipse cx="0" cy="10" rx="18" ry="20" fill="white" />
        {/* Belly */}
        <ellipse cx="0" cy="12" rx="12" ry="14" fill={color} opacity="0.1" />
        {/* Head */}
        <circle cx="0" cy="-12" r="14" fill="white" />
        {/* Ear tufts */}
        <polygon points="-10,-24 -6,-16 -14,-16" fill={color} opacity="0.5" />
        <polygon points="10,-24 6,-16 14,-16" fill={color} opacity="0.5" />
        {/* Eye circles */}
        <circle cx="-6" cy="-12" r="5" fill={color} opacity="0.15" />
        <circle cx="6" cy="-12" r="5" fill={color} opacity="0.15" />
        {/* Eyes */}
        <circle cx="-6" cy="-12" r="2.5" fill={color} />
        <circle cx="6" cy="-12" r="2.5" fill={color} />
        {/* Beak */}
        <polygon points="0,-9 -2,-6 2,-6" fill="#FF9A76" />
        {/* Wings */}
        <ellipse cx="-16" cy="8" rx="6" ry="14" fill={color} opacity="0.2" transform="rotate(10,-16,8)" />
        <ellipse cx="16" cy="8" rx="6" ry="14" fill={color} opacity="0.2" transform="rotate(-10,16,8)" />
        {/* Feet */}
        <line x1="-6" y1="28" x2="-9" y2="34" stroke="#FF9A76" strokeWidth="2" />
        <line x1="-6" y1="28" x2="-3" y2="34" stroke="#FF9A76" strokeWidth="2" />
        <line x1="6" y1="28" x2="3" y2="34" stroke="#FF9A76" strokeWidth="2" />
        <line x1="6" y1="28" x2="9" y2="34" stroke="#FF9A76" strokeWidth="2" />
      </g>
    ),
    duck: (
      <g transform="translate(50,50)">
        {/* Body */}
        <ellipse cx="0" cy="12" rx="16" ry="16" fill="white" />
        {/* Wing */}
        <ellipse cx="-10" cy="10" rx="8" ry="12" fill={color} opacity="0.2" transform="rotate(-10,-10,10)" />
        {/* Head */}
        <circle cx="0" cy="-8" r="11" fill="white" />
        {/* Bill */}
        <ellipse cx="12" cy="-6" rx="6" ry="3" fill="#FF9A76" />
        {/* Eye */}
        <circle cx="5" cy="-11" r="2.5" fill={color} />
        {/* Head tuft */}
        <circle cx="-2" cy="-18" r="3" fill={color} opacity="0.3" />
        <circle cx="3" cy="-18" r="3" fill={color} opacity="0.3" />
        <circle cx="0" cy="-20" r="2.5" fill={color} opacity="0.3" />
        {/* Tail */}
        <ellipse cx="-14" cy="20" rx="4" ry="8" fill={color} opacity="0.2" transform="rotate(-20,-14,20)" />
      </g>
    ),
    turtle: (
      <g transform="translate(50,50)">
        {/* Shell */}
        <ellipse cx="0" cy="4" rx="22" ry="16" fill={color} opacity="0.3" />
        {/* Shell pattern */}
        <ellipse cx="0" cy="4" rx="8" ry="6" fill="white" opacity="0.4" />
        {/* Head */}
        <circle cx="20" cy="-4" r="9" fill="white" />
        {/* Eye */}
        <circle cx="23" cy="-7" r="2.5" fill={color} />
        {/* Smile */}
        <path d="M22,-2 Q24,1 26,-2" stroke={color} strokeWidth="1.5" fill="none" />
        {/* Legs */}
        <ellipse cx="-14" cy="14" rx="6" ry="4" fill="white" />
        <ellipse cx="14" cy="14" rx="6" ry="4" fill="white" />
        {/* Tail */}
        <ellipse cx="-20" cy="2" rx="4" ry="2" fill="white" />
      </g>
    ),
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full ${className}`}
      style={{ backgroundColor: color, width: px, height: px }}
      role="img"
      aria-label={`${animal} character avatar`}
    >
      <svg
        viewBox="0 0 100 100"
        width={px * 0.75}
        height={px * 0.75}
        aria-hidden="true"
        className="drop-shadow-sm"
      >
        {silhouettes[animal]}
      </svg>
    </div>
  );
}
