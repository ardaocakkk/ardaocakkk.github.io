/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: [
    "./src/**/*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        site: "#1A202C",
        white_site: "#ECECEC",
        post_bg: "#2B3A55",
        post_text : "#263159",
        python: "#FC7300",
        java: "#F89820",
        white_post: "#B2B2B2",
        edu: "#343A40"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
