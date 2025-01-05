/** @type {import('tailwindcss').Config} */

import tailwindFormPlugin from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // darkMode: ["class", '[class="dark-mode"]'],
  theme: {
    extend: {},
  },
  plugins: [tailwindFormPlugin("@tailwindcss/forms")],
};
