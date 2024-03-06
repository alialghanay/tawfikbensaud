import React from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
  gradientColor?: string;
  gradientOpacity?: number;
};

const Spotlight: React.FC<SpotlightProps> = ({
  className,
  fill,
  gradientColor = "#0ECDCD",
}: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute m-0 p-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <defs>
        <linearGradient
          gradientTransform="rotate(320, 1, 1)"
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ffflux-gradient"
        >
          <stop stopColor={gradientColor} stopOpacity="1" offset="0%"></stop>
          <stop stopColor="hsv(0, 0%, 0%)" stopOpacity="0" offset="100%"></stop>
        </linearGradient>
      </defs>
      <circle
        cx="75"
        cy="75"
        r="75"
        fill={fill || "url(#ffflux-gradient)"}
        fillOpacity="0.5"
      />
    </svg>
  );
};

export default Spotlight;
