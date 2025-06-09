module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  important: true,
  "theme": {
    "extend": {
      "colors": {
        "skyBlue": "#87CEEB",
        "softPink": "#FFC0CB",
        "mintGreen": "#98FF98",
        "softGray": "#E5E5E5"
      },
      "fontFamily": {
        "sans": [
          "Inter",
          "sans-serif"
        ]
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  }
}