const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const buildWebpackConfig = merge(baseWebpackConfig, {
  // BUILD config
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})
