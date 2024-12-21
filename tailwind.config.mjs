/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "lisiy-accent": {
          50: "#fff9ec",
          100: "#fff2d3",
          200: "#ffe2a5",
          300: "#ffcc6d",
          400: "#ffaa32",
          500: "#ff8f0a",
          600: "#e66b00",
          700: "#cc5602",
          800: "#a1420b",
          900: "#82380c",
          950: "#461a04",
        },
      },
    },
  },
  plugins: [],
};
