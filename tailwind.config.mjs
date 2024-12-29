/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#002029",
        "btn-bg-color": "#116466",
        "secondary-color": "#9a96a9"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        jacques: ['Jacques Francois Shadow', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
