/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: {
          100: '#F7F7F7',
          200: '#E5E5E5',
          300: '#CCCCCC',
          400: '#B3B3B3',
          500: '#999999',
          600: '#666666',
          700: '#444444',
          800: '#222222',
          900: '#1F2937',
        },
      },
    },
  },
  plugins: [],
};
