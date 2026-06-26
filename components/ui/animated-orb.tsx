"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AnimatedOrb() {
  const cx = 140;
  const cy = 140;
  const outerRadius = 132;

  /*
   * MATHEMATICAL CONCEPT: POLAR TO CARTESIAN COORDINATE CONVERSIONS FOR REGULAR POLYGONS
   * * 1. Angular Step:
   * A complete circle encompasses 2*PI radians. To plot an n-sided regular polygon,
   * the perimeter is divided into equal angular steps based on the vertex index (i):
   * Base Angle = (2 * PI * i) / n
   * * 2. Angular Displacement (Offset):
   * To orient or dynamically rotate the shape, an offset in degrees is added.
   * Degrees are converted to radians via (Degrees * PI / 180).
   * Total Angle (Theta) = Base Angle + (Offset * PI / 180)
   * * 3. Coordinate Projection:
   * Using trigonometric functions, the vertex location is derived by projecting
   * the radius along the X-axis (using cosine) and Y-axis (using sine), then
   * offsetting the relative distances from the defined center origin (cx, cy):
   * X = cx + radius * cos(Theta)
   * Y = cy + radius * sin(Theta)
   */
  const getPolygonPoints = (
    sides: number,
    angleOffset: number,
    radius: number,
  ) => {
    return Array.from({ length: sides }, (_, i) => {
      const angle = (2 * Math.PI * i) / sides + (angleOffset * Math.PI) / 180;
      return `${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`;
    }).join(" ");
  };

  return (
    <div className="relative flex size-[260px] sm:size-[300px] lg:size-[400px] shrink-0 items-center justify-center select-none overflow-visible">
      <div className="absolute inset-0 rounded-full bg-accent-primary/15 blur-[40px] mix-blend-screen" />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="size-full"
          viewBox="0 0 280 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx={cx}
            cy={cy}
            r={outerRadius}
            stroke="var(--color-accent-primary)"
            strokeOpacity="0.45"
            strokeWidth="1"
            strokeDasharray="3 4"
            style={{ transformOrigin: "140px 140px" }}
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          />

          <circle
            cx={cx}
            cy={cy}
            r={outerRadius - 6}
            stroke="var(--color-accent-primary)"
            strokeOpacity="0.15"
            strokeWidth="0.5"
          />

          {[0, 15, 30, 45, 60, 75].map((angle, index) => (
            <motion.polygon
              key={`poly-${angle}`}
              points={getPolygonPoints(4, angle, outerRadius)}
              stroke="var(--color-accent-primary)"
              strokeOpacity={index % 2 === 0 ? 0.5 : 0.2}
              strokeWidth="0.8"
              style={{ transformOrigin: "140px 140px" }}
              animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 18 + index * 2,
              }}
            />
          ))}

          {[0, 30, 60].map((angle, index) => (
            <motion.polygon
              key={`hex-${angle}`}
              points={getPolygonPoints(6, angle, outerRadius - 12)}
              stroke="var(--color-accent-primary)"
              strokeOpacity="0.15"
              strokeWidth="0.5"
              style={{ transformOrigin: "140px 140px" }}
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
      <div className="absolute size-[180px] sm:size-[210px] lg:size-[260px] rounded-full bg-gradient-to-tr from-main via-card-secondary to-main p-[3px] shadow-[0_0_40px_18px_rgba(123,31,53,0.35)] z-10">
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
      <div className="absolute size-[165px] sm:size-[190px] lg:size-[182px] rounded-full border border-accent-primary/30 animate-pulse z-0" />
    </div>
  );
}
