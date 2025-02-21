import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-nav-blue': "#353b57",
        'primary-blue': "#2c3144",
        'primary-orange': "#FF5722",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'xs': '490px', // Custom breakpoint at 412px
      },     
    },
  },
  plugins: [],
} satisfies Config;
