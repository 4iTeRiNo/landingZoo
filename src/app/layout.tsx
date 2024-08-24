import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { nunito, openSans, roboto, montserrat } from "./fonts";
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
      ${roboto.variable} ${montserrat}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
