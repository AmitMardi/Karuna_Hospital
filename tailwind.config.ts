import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#0E7C66',
          light: '#139F83',
          dark: '#0A5949',
        },
        surface: {
          DEFAULT: '#FAFAF8',
          alt: '#F0F0EA',
        },
        text: {
          DEFAULT: '#1F2937',
          muted: '#4B5563',
        }
      },
    },
  },
  plugins: [],
};
export default config;
