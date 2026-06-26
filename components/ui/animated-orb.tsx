"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const VIEWBOX_SIZE = 280;
const CENTER = VIEWBOX_SIZE / 2;
const OUTER_RADIUS = CENTER - 8;

const SQUARE_ANGLES = [0, 15, 30, 45, 60, 75];
const HEX_ANGLES = [0, 30, 60];


const getPolygonPoints = (
  sides: number,
  angleOffset: number,
  radius: number,
) => {
  return Array.from({ length: sides }, (_, i) => {
    const angle = (2 * Math.PI * i) / sides + (angleOffset * Math.PI) / 180;
    return `${CENTER + radius * Math.cos(angle)},${CENTER + radius * Math.sin(angle)}`;
  }).join(" ");
};

export function AnimatedOrb() {
  return (
    <div className="relative w-[min(25rem,85vw)] aspect-square flex shrink-0 items-center justify-center select-none overflow-visible">
      <div className="absolute inset-0 rounded-full bg-accent-primary/15 blur-3xl mix-blend-screen" />

      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="size-full"
          viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
        >
          <motion.circle
            cx={CENTER}
            cy={CENTER}
            r={OUTER_RADIUS}
            stroke="var(--color-accent-primary)"
            strokeOpacity="0.45"
            strokeWidth="1"
            strokeDasharray="3 4"
            style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          />

          <circle
            cx={CENTER}
            cy={CENTER}
            r={OUTER_RADIUS - 6}
            stroke="var(--color-accent-primary)"
            strokeOpacity="0.15"
            strokeWidth="0.5"
          />

          {SQUARE_ANGLES.map((angle, index) => (
            <motion.polygon
              key={`poly-${angle}`}
              points={getPolygonPoints(4, angle, OUTER_RADIUS)}
              stroke="var(--color-accent-primary)"
              strokeOpacity={index % 2 === 0 ? 0.5 : 0.2}
              strokeWidth="0.8"
              style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
              animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 18 + index * 2,
              }}
            />
          ))}

          {HEX_ANGLES.map((angle, index) => (
            <motion.polygon
              key={`hex-${angle}`}
              points={getPolygonPoints(6, angle, OUTER_RADIUS - 12)}
              stroke="var(--color-accent-primary)"
              strokeOpacity="0.15"
              strokeWidth="0.5"
              style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
              animate={{ rotate: index % 2 === 0 ? -360 : 360 }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 22 + index * 3,
              }}
            />
          ))}
        </svg>
      </div>

      <div className="absolute w-[68%] aspect-square rounded-full bg-gradient-to-tr from-main via-card-secondary to-main p-[3px] shadow-[0_0_40px_18px_rgba(123,31,53,0.35)] z-10">
        <div className="relative size-full rounded-full bg-main overflow-hidden border border-white/5">
          <Image
            src="/hero.jpeg"
            alt="Abdelrhman"
            fill
            priority
            className="object-cover scale-105 contrast-[1.05] brightness-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/20 via-transparent to-transparent mix-blend-color-burn" />
        </div>
      </div>

      <div className="absolute w-[63%] aspect-square rounded-full border border-accent-primary/30 animate-pulse z-0" />
    </div>
  );
}
