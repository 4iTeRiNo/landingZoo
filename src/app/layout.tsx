import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { nunito, openSans, roboto } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZooRama",
  description: " Найди друга и стань счастливым",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunito.variable} ${openSans.variable} 
      ${roboto.variable}`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
