/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        young: ['Young Serif', 'serif'],
        inter: ['Inter', 'serif'],
        figtree: ['Figtree', 'serif'],
        worksans: ["Work Sans", 'serif']
      },
      colors: {
        primary: {
          "300": "#3685ff",
          DEFAULT: '#2c7dfa',
        },
        gray: {
          "300": "#68778d",
          "500": "#6b6b6b",
          "700": "#1f314f",
          "950": "#121212",
          DEFAULT: '#d5e1ef',
        },
        brown: {
          "800": "#67382b"
        },
        rose: {
          "50": "#fff5f8",
          "800": "#6b2a41"
        },
        stone: {
          "100": "#f5e9dc",
          "150": "#dfdbd6",
          "600": "#5b544f",
          "900": "#2e2b29"
        },
        grey: {
          "700": "#333333",
          "800": "#1e1e1e",
          "900": "#141414"
        },
        green: {
          DEFAULT: "#c5f82a"
        },
        yellow: {
          DEFAULT: "#f4d04e"
        },
        pink: {
          light: '#f9f0ff'
        },
        purple: {
          grayish: '#8c6991',
          dark: '#2f1533'
        }
      },
      boxShadow: {
        custom: '8px 8px rgba(0, 0, 0, 1)'
      },
    }
  },
  plugins: [],
}

