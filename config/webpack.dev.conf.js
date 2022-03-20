const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV config
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    inline: true,
    contentBase: baseWebpackConfig.externals.paths.dist,
    port: 9000,
    host: "0.0.0.0",
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
