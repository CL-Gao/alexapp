module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-lighter": "#869ab8",
        "gray-400": "#869ab8",
        "gray-800": "#161c2d",
        "blue-600": "#335eea",
        "blue-700": "#2b50c7",
      },
      fontFamily: {
        body: "'HK Grotesk', sans-serif",
        sans: "'HK Grotesk', sans-serif",
        serif: "'HK Grotesk', sans-serif",
        display: "'HK Grotesk', sans-serif",
        serif: "'HK Grotesk', sans-serif",
      },
      boxShadow: {
        image: "25px 60px 125px -25px rgba(80,102,144,.1),16px 40px 75px -40px rgba(0,0,0,.2)",
        card: "0 1.5rem 4rem rgba(22,28,45,.05)",
      },
      backgroundImage: {
        "light-gradient": "linear-gradient(180deg,#f9fbfd 0,#fff)",
      },
    },
  },
  plugins: [],
};
