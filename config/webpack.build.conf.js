const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const buildWebpackConfig = merge(baseWebpackConfig, {
  // BUILD config
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          mangle: true,
          output: {
            comments: false,
          },
        },
      }),
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
  ],
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});
