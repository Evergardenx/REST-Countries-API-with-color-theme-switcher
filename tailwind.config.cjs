/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      fontFamily: {
        sans: ["Nunito Sans", "system-ui"],
      },
      colors: {
        theme: {
          bkg: "hsl(var(--theme-bkg) / <alpha-value>)",
          elements: "hsl(var(--theme-elements) / <alpha-value>)",
          text: "hsl(var(--theme-text) / <alpha-value>)",
          input: "hsl(var(--theme-input) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
