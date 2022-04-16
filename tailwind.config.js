module.exports = {
  mode:"jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        discord_blue: "#295DE7",
        discord_blurple: "#5865F2",
        discord_purple: "#5865f2",
        discord_green: "#3ba55c",
      },
      // fontFamily:{
      //   ginto:[
      //    "Ginto Nord" , "Whitney", "Helvetica Neue" , "Helvetica" , "Arial" , "sans-serif"
      //   ]
      // }
      fontFamily:{
        ginto:[
         "ginto"
        ]
      },
    },
  },
  plugins: [],
}