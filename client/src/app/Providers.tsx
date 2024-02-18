"use client";

import React, { ReactNode } from "react";
// themes
import { theme as MUITheme } from "../themes/MUITheme";
import { ThemeProvider } from "@emotion/react";
export default function Providers({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={MUITheme}>{children}</ThemeProvider>;
}
