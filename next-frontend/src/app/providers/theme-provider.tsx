"use client";

import { ReactNode } from "react";

import { ThemeProvider as NextThemes } from "next-themes";

const ThemeProvider = ({ children }: { children?: ReactNode }) => {
  return <NextThemes defaultTheme="dark">{children}</NextThemes>;
};

export default ThemeProvider;
