import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        green: {
          main: "#00db9a",
          dark: "#00c48a",
          price: "#189966",
          cta1: "#00bc7f",
          cta2: "#00b8d8",
          pkg1: "#00bc82",
          pkg2: "#00b8d4",
          icon: "#d0fae5",
        },
        blue: {
          addl: "#eef9ff",
          addlBorder: "#abe1ff",
          addlIcon: "#00b8db",
          price: "#0092b8",
        },
        badge: "#ffb900",
        gray: {
          section: "#f9fafb",
          card: "#d9d9d9",
        },
      },
      borderRadius: {
        "10": "10px",
        "15": "15px",
        "20": "20px",
        "25": "25px",
        "30": "30px",
        "200": "200px",
      },
      boxShadow: {
        nav: "0px 0px 20px 0px rgba(0,0,0,0.07)",
        card: "0px 2px 8px 0px rgba(0,0,0,0.10)",
        "card-lg": "0px 0px 16px 0px rgba(0,0,0,0.05)",
        photo: "0px 0px 20px 0px rgba(0,0,0,0.10)",
        hero: "0px 0px 20px 0px rgba(0,0,0,0.10)",
        video: "0px 0px 16px 0px rgba(0,0,0,0.25)",
        popular: "0px 4px 16px 0px rgba(0,0,0,0.25)",
        badge: "0px 2px 8px 0px rgba(0,0,0,0.15)",
        book: "0px 0px 8px 0px rgba(0,0,0,0.15)",
        zabron: "0px 4px 16px 0px rgba(0,0,0,0.15)",
        cta: "0px 4px 16px 0px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
