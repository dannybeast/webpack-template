const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
// const ImageminPlugin = require('imagemin-webpack-plugin').default
// const imageminMozjpeg = require('imagemin-mozjpeg');
const {
  VueLoaderPlugin
} = require('vue-loader')


// Main const
const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
}

// const PAGES_DIR = PATHS.src
const PAGES_DIR = `${PATHS.src}/pug/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
  // BASE config
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src,
    //mnp: `${PATHS.src}/mnp.js`
  },
  output: {
    // [hash]
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    //publicPath: './'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [{
        test: /\.pug$/,
        oneOf: [
          // this applies to <template lang="pug"> in Vue components
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader']
          },
          // this applies to pug imports inside JavaScript
          {
            use: [{
              loader: 'pug-loader',
              options: {
                pretty: true
              },
            }]
          }
        ]
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loader: {
            scss: 'vue-style-loader!css-loader!sass-loader'
          }
        }
      }, {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          spriteFilename: 'sprite.svg',
          runtimeCompat: true
        }
      },

      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: `./config/postcss.config.js`
              }
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: `./postcss.config.js`
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '~': PATHS.src,
      'vue$': 'vue/dist/vue.js',
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      // [hash]
      filename: `./${PATHS.assets}css/[name].css`
    }),
    new CopyWebpackPlugin([{
        from: `${PATHS.src}/${PATHS.assets}images`,
        to: `${PATHS.assets}images`
      }, {
        from: `${PATHS.src}/${PATHS.assets}icons`,
        to: `${PATHS.assets}icons`
      },
      {
        from: `${PATHS.src}/${PATHS.assets}fonts`,
        to: `${PATHS.assets}fonts`
      },
      {
        from: `${PATHS.src}/static`,
        to: ''
      },
    ]),
    // new ImageminPlugin({
    //   pngquant: ({quality: 50}),
    //   plugins: [imageminMozjpeg({quality: 50})]
    // }),

    // Automatic creation any html pages (Don't forget to RERUN dev server)
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`,
      inject: false,
      hash: false,
      minify: false
    })),

  ],
}