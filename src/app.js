// SVG
var __svg__ = {
  path: './assets/icons/**/*.svg',
  name: 'assets/icons/sprite.svg',
  filename: '/assets/icons/sprite.svg',
};

require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);

// SCSS
import './assets/scss/app.scss';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Start');
});
