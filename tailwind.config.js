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
        inter: ['Inter', 'serif']
      },
      colors: {
        primary: {
          "300": "#3685ff",
          DEFAULT: '#2c7dfa',
        },
        gray: {
          "300": "#68778d",
          "700": "#1f314f",
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
        }
      },
    }
  },
  plugins: [],
}

