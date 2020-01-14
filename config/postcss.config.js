// autoprefixer - https://github.com/postcss/autoprefixer
// css-mqpacker - https://github.com/hail2u/node-css-mqpacker
// cssnano      - https://github.com/hail2u/node-css-mqpacker

// npm install postcss-loader autoprefixer css-mqpacker cssnano --save-dev


module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-inline-svg'),
    require('postcss-svgo'),
    require('cssnano'),
    require('css-mqpacker')
  ]
}