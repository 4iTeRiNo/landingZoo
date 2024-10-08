import type { Metadata } from "next";
import "./globals.css";
import { CounterStoreProvider } from "@/components/providers";
import { inter, openSans, roboto } from "./fonts";

export const metadata: Metadata = {
  title: "ZooRama",
  description: "Найди друга и стань счастливым",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${openSans.variable} 
      ${roboto.variable}`}
      >
        <CounterStoreProvider>{children}</CounterStoreProvider>
      </body>
    </html>
  );
}
