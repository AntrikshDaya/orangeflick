import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0C1618",
          secondary: "#121E22",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#DCE0D9",
          muted: "#9AA6A1",
        },
        accent: {
          primary: "#E85D04",
        },
        border: {
          subtle: "#2A3437",
        },
      },
    },
  },
  plugins: [],
};

export default config;
