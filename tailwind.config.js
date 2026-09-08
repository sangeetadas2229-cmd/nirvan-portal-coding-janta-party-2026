/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigoDark: '#1E293B',   // Primary Header / Background
        sageMisty: '#C1CDC4',    // Secondary Badge / Accent
        slateGray: '#64748B',    // Subtext / Labels
      },
    },
  },
  plugins: [],
}