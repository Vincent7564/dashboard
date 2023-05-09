module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '3': 'repeat(3, minmax(0, 1fr))'
      },
      colors:{
        'tweet-blue' : '#55acee',
        'facebook-blue' : '#3b5998',
        'navy' : '#333a66'
      },
    },
  },
  plugins: [],
}
