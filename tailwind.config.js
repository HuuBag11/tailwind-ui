/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'user-profile': "url('../public/assets/bg-block-one.png')",
        'user-list': "url(https://images.unsplash.com/photo-1724024702777-54cffe52d2aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D), linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(22, 43, 76, 0.4))",
      }
    },
  },
  plugins: [],
};
