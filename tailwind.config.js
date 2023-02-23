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
        "roos" : "#db3751",
        "donker" : "#1d2d4e"
      },
      boxShadow: {
        "shadowbleu" : '0px 8px 0px -10px rgb(222,225,240,1)',
      },
      
      "30%" : "30%",
      "40%" : "40%",
      "15px" : "15px",
      "600px" : "600px",
    },
  },
  plugins: [],
}
