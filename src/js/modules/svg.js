// SVG
var __svg__ = {
  path: '../../assets/icons/**/*.svg',
  name: 'assets/icons/sprite.svg',
  filename: window.assets_path ? window.assets_path : 'assets/icons/sprite.svg',
};

require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);
