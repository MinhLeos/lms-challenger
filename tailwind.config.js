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
        }
      },
    },
  },
  plugins: [],
}

