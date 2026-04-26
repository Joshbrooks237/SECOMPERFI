import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-matrix-mono)", "Courier New", "Courier", "monospace"],
        mono: ["var(--font-matrix-mono)", "Courier New", "Courier", "monospace"],
      },
      colors: {
        matrix: {
          black: "#000000",
          phosphor: "#00ff41",
          dim: "#003b00",
          deep: "#001a00",
          red: "#ff0000",
        },
      },
    },
  },
  plugins: [],
};

export default config;
