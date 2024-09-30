/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        hover: "#a5f3fc "
      },
      screens: {
        '2xs': '300px',
        'xs': '450px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      animation: {
        scroll: 'scroll 17s linear infinite',
        bounceSlow: 'bounce 0.8s infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      backgroundColor: '#000'
    },
  },
  plugins: [],
}

