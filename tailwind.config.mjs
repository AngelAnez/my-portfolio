/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#00ff99",
          secondary: "#018786",
          text: "#fff",
          background: {
            primary: "#121212",
            secondary: "#18181b",
          },
        },
      },
      animation: {
        fade: "fadeOut 10s ease-in-out",
      },
      keyframes: {
        fadeOut: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1},
        }
      }
    },
  },
  plugins: [],
};
