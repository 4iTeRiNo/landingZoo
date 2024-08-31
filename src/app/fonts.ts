import { Inter, Open_Sans as OpenSans, Roboto } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "800"],
  variable: "--inter-font",
});

export const openSans = OpenSans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--open-sans-font",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--roboto-font",
});
