/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#040D12",
        gray: "#526D82",
        white: "#F8F9FC",
        skywhite: "#EFF5F5",
        darkblue: "#0E2954",
        blue: "#0A6EBD",
        lightblue: "#3A98B9",
        darkorange: "#F97B22",
        orange: "#F29727",
        lightorange: "#FFB84C",
        darksilver: "#C4DFDF",
        silver: "#D2E9E9",
        lightsilver: "#F4F9F9",
      },
    },
    fontFamily: {
      quicksand: ["Quicksand", "sans-serif"],
      dmmono: ["DM Mono", "mono"],
      robotoslab: ["Roboto Slab", "serif"],
    },
  },
  plugins: [],
};
