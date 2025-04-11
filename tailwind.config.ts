import type { Config } from "tailwindcss";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

function addVariablesForColors({ addBase, theme }: any) {
  const colors = theme("colors");
  const flattened = flattenColorPalette(colors);
  
  // Create CSS variables only for string values.
  const newVars = Object.entries(flattened).reduce((acc, [key, value]) => {
    if (typeof value === "string") {
      acc[`--${key}`] = value;
    }
    return acc;
  }, {} as Record<string, string>); 

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
        blue:'#496989',
        brownie:'#A55B4B',
        brown:'#6F4E37',
        lightBrown:'#DAC0A3',
        medPerple: "#FFB4A2",
        Pink: "#FFEFC8",
        lightcolor: "#B7B1F2",
        darkPurple: "#619fcf",
        Pale: "#dcb4fe",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [addVariablesForColors],
};

export default config;
