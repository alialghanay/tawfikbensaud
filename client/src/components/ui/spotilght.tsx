import React from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-20  h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      {/* <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.3"
        ></ellipse>
      </g> */}
      <circle
        cx="130"
        cy="130"
        r="130"
        fill={fill || "url(#paint0_linear_168_4815)"}
        fill-opacity="0.3"
      />
      <defs>
        <linearGradient
          id="paint0_linear_168_4815"
          x1="44"
          y1="39.5"
          x2="204.5"
          y2="260"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0ECDCD" />
          <stop offset="0.729611" stop-color="#0ECDCD" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
