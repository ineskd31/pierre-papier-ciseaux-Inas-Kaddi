/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'triangle': "url('./bg-triangle.svg')",
      },
      colors: {
        "gri" : "#e6e6e6",
        "blauw" : "#546ff4",
        "geel" : "#eba31a",
        "roos" : "#db3751"
      },
      "30%" : "30%",
      "15px" : "15px"
    },
  },
  plugins: [],
}
