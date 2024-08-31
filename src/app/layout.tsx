import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
