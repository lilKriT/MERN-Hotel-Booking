/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      screens: {
        tablet: "576px",
        desktop: "1024px",
      },
      colors: {
        primary: "#009FFF",
        secondary: "#ec2F4B",
      },
    },
  },
  plugins: [],
};
