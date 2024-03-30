"use client";
import React, { ReactNode } from "react";
import "@/lib/i18n";
import dynamic from "next/dynamic";
import Footer from "@/components/footer";
const NavBar = dynamic(() => import("@/components/navs/NavBar"), {
  ssr: false,
});
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
