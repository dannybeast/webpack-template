const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const buildWebpackConfig = merge(baseWebpackConfig, {
  // BUILD config
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  },
  plugins: [
    
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})
