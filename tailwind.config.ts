import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Backup in case you aren't using the src folder
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyberDark: "#0f0c1b",   
        cyberTape: "#1e1a3a",   
        neonPink: "#ff007f",    
        electricViolet: "#7b2cbf", 
        cyberBlue: "#00b4d8",   
        cyberGreen: "#00f5d4",  
      },
      boxShadow: {
        'pixel-pink': '4px 4px 0px 0px #ff007f',
        'pixel-violet': '4px 4px 0px 0px #7b2cbf',
      }
    },
  },
  plugins: [],
};
export default config;
