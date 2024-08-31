import type { Config } from "tailwindcss";
// eslint-disable-next-line import/no-extraneous-dependencies
import { nextui } from "@nextui-org/theme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "360px",
        md: "720px",
        lg: "1024px",
        "2lg": "1280px",
        xl: "1440px",
        "2xl": "1920px",
      },
      hover: {},
      animation: {
        moveToLeft: "moveToLeft 0.5s ease forwards",
        moveToLeftLinks: "moveToLeftLinks 1.1s ease forwards",
        animateVisible: "animateVisible 1s ease forwards",
        loaderDown: "loaderDown 4s alternate",
      },
      keyframes: {
        moveToLeft: {
          "0%, 50%": {
            transform: "translateX(15px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        moveToLeftLinks: {
          "0%, 50%, 70%": {
            transform: "translateX(15px)",
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        moveToTop: {
          "0%": {
            opacity: "0",
          },

          "100%": {
            opacity: "1",
          },
        },
        animateVisible: {
          "0%": {
            opacity: "0",
            height: "0",
          },
          "70%": {
            display: "none",
            height: "10%",
          },
          "100%": {
            opacity: "1",
            height: "100%",
          },
        },
        loaderDown: {
          "0%": {
            transform: "translateY(-80px)",
          },
          "50%": {
            transform: "translateY(0px)",
          },
          "100%": {
            transform: "translateY(-80px)",
          },
        },
      },
      colors: {
        white: "var(--white)",
        black: "var(--black)",
        accentColor: "var(--purple850)",
        bgStone750: "var(--stone750)",
        greyText: "var(--text-color-grey)",
        borderColor: "var(--border-b-color)",
      },
      borderRadius: {
        DEFAULT: "var(--border-radius)",
        full: "100%",
      },
      fontFamily: {
        inter: "var(--font-family)",
        roboto: "var(--second-font)",
        montserrat: "var(--third-font)",
      },
      backgroundColor: {
        bgColor: "var(--backgroundColor)",
      },
      backgroundImage: {
        "accent-gradient": "var(--purple-gradient)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
