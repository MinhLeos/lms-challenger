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
        outfit: ["Outfit", "sans-serif"],
        young: ["Young Serif", "serif"],
        inter: ["Inter", "serif"],
        figtree: ["Figtree", "serif"],
        worksans: ["Work Sans", "serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
        bricolage: ["Bricolage Grotesque", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        primary: {
          300: "#3685ff",
          DEFAULT: "#2c7dfa",
        },
        gray: {
          300: "#68778d",
          500: "#6b6b6b",
          700: "#1f314f",
          950: "#121212",
          DEFAULT: "#d5e1ef",
        },
        brown: {
          800: "#67382b",
        },
        rose: {
          50: "#fff5f8",
          800: "#6b2a41",
        },
        stone: {
          100: "#f5e9dc",
          150: "#dfdbd6",
          600: "#5b544f",
          900: "#2e2b29",
        },
        grey: {
          700: "#333333",
          800: "#1e1e1e",
          900: "#141414",
        },
        green: {
          DEFAULT: "#c5f82a",
        },
        yellow: {
          DEFAULT: "#f4d04e",
        },
        pink: {
          light: "#f9f0ff",
        },
        purple: {
          grayish: "#8c6991",
          dark: "#2f1533",
          DEFAULT: "#AD28EB",
        },
        // Weather App Colors (Challenger Six)
        neutral: {
          0: "hsl(0, 0%, 100%)",
          200: "hsl(250, 6%, 84%)",
          300: "hsl(240, 6%, 70%)",
          600: "hsl(243, 23%, 30%)",
          700: "hsl(243, 23%, 24%)",
          800: "hsl(243, 27%, 20%)",
          900: "hsl(243, 96%, 9%)",
        },
        orange: {
          500: "hsl(28, 100%, 52%)",
        },
        blue: {
          500: "hsl(233, 67%, 56%)",
          700: "hsl(248, 70%, 36%)",
        },
        // Multi-step Form Colors (Challenger Seven)
        "ms-marine": "hsl(213, 96%, 18%)",
        "ms-purplish": "hsl(243, 100%, 62%)",
        "ms-pastel": "hsl(228, 100%, 84%)",
        "ms-lightblue": "hsl(206, 94%, 87%)",
        "ms-strawberry": "hsl(354, 84%, 57%)",
        "ms-coolgray": "hsl(231, 11%, 63%)",
        "ms-lightgray": "hsl(229, 24%, 87%)",
        "ms-magnolia": "hsl(218, 100%, 97%)",
        "ms-alabaster": "hsl(231, 100%, 99%)",
      },
      boxShadow: {
        custom: "8px 8px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};

