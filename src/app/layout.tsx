import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import TransitionProvider from "@components/transition-provider";


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
      <body className={roboto.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
