import type { Config } from "tailwindcss";

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = theme("colors");
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        medPerple:'#FFB4A2',
        Pink:'#FFEFC8',
        lightcolor:'#B7B1F2',
        darkPurple: "#619fcf",
        Pale: "#dcb4fe",
        background: "var(--background)",
        foreground: "var(--foreground)",  
      },
    },
  },
  plugins: [addVariablesForColors,],
};

export default config;
