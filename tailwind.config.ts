import type { Config } from "tailwindcss";
import Sidebar from "./components/sidebar/page";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sidebarBG: "#0b0b0b",
      },
    },
  },
  plugins: [],
} satisfies Config;
