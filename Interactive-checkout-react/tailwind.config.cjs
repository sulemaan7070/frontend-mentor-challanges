/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        desktop: "url('./src/images/bg-main-desktop.png')",
        mobile: "url('./src/images/bg-main-mobile.png')",
      },
      // colors: {
      //   // Configure your color palette here
      //   WhiteIM: "hsl(0, 0%, 100%)",
      //   LightGrayishViolet: "hsl(270, 3%, 87%)",
      //   DarkGrayishViolet: "hsl(279, 6%, 55%)",
      //   VeryDarkViolet: "hsl(278, 68%, 11%)",
      // },
    },
  },
  plugins: [],
};
