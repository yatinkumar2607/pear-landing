/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: '640px',
      sm: '768px',
      md: '1024px',
      lg: '1280px',
      xl: '1440px',
      xxl:"1920px",
      xxxl:"2560px",


    },
    colors: {
      primary: "#1F0048",
      grey700: "#4A5568",
      grey600: "#718096",
      blue: "#612ADB",
      DarkSkyblue: "#3ECEF1",
      black: "#000",
      white: "#FFF",
      secondary:"#C6D135"
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["18px", "30px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      xxl: ["35px", "43px"],
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    extend: {
      transform: {
        'rotate-y-20': 'rotateY(20deg)',
      },
      perspective: {
        '1100': '1100px',
      },
    },
  },
  plugins: [],
};
