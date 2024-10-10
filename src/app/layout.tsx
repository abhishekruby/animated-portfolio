import React from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import AnimatedCursor from "react-animated-cursor";

import "@/styles/globals.css";
import TransitionProvider from "@components/transition-provider";
import StoreProvider from "@app/store/StoreProvider";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"], });

export const metadata: Metadata = {
  title: "Abhishek Ruby",
  description: "My animated portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className + "bg-slate-900"} suppressHydrationWarning={true}>
        {/* <AnimatedCursor innerSize={20} color='6, 182, 212' /> */}
          <StoreProvider>
          {children}
          </StoreProvider>
      </body>
    </html>
  );
}