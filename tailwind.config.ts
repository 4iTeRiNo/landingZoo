import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
      hover: {
        orange150:
          "linear-gradient(90deg, var(--orange50) 0%, var(--orange100) 100%)",
        orange300:
          "linear-gradient(90deg, var(--orange50) 0%, var(--orange100) 100%)",
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
        animationDuration: {
          "0%, 100%": {
            transition: "1s ease-in",
          },
        },
      },
      animation: {
        moveToLeft: "moveToLeft 0.5s ease forwards",
        moveToLeftLinks: "moveToLeftLinks 1.1s ease forwards",
        moveToTop: "moveToTop 0.5s ease-in-out forwards",
      },
      colors: {
        grey: {
          200: "var(--grey200)",
          600: "var(--grey600)",
        },
        stone: {
          550: "var(--stone550)",
          650: "var(--stone650)",
          750: "var(--stone750)",
          850: "var(--stone850)",
          950: "var(--stone950)",
        },
        black: "var(--black)",
        green: {
          750: "var(--green750)",
        },
        indigo: {
          950: "var(--indigo950)",
        },
        orange: {
          50: "var(--orange50)",
          100: "var(--orange100)",
          150: "var(--orange150)",
          200: "var(--orange200)",
          400: "var(--orange300)",
          500: "var(--orange500)",
          600: "var(--orange600)",
        },
      },
      backgroundImage: {
        "main-gradient-orange-linear":
          "linear-gradient(180deg, var(--orange200) 0%, var(--orange500) 100%)",
        "btn-gradient-orange-normal":
          "linear-gradient(90deg, var(--orange200) 0%, var(--orange400) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
