"use client";

import React, { ReactNode } from "react";
import NavBar from "@/components/navs/NavBar";
import "@/lib/i18n";
import i18n from "@/lib/i18n";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
