module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '3': 'repeat(3, minmax(0, 2fr))'
      }
    },
  },
  plugins: [],
}
