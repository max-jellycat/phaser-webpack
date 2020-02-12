const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Is the current build a development build
const IS_DEV = process.env.NODE_ENV === 'dev';

const dirNode = path.join(__dirname, '../node_modules');
const dirApp = path.join(__dirname, '../src');
const dirAssets = path.join(__dirname, '../src/assets');

const appHtmlTitle = 'Phaser Webpack Template';

/**
 * Webpack Configuration
 */
module.exports = {
  entry: {
    bundle: path.join(dirApp, 'index.js'),
    vendor: ['phaser']
  },
  resolve: {
    modules: [dirNode, dirApp, dirAssets]
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_DEV: IS_DEV,
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true)
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(dirApp, './index.ejs'),
      title: appHtmlTitle
    })
  ],
  module: {
    rules: [
      // BABEL
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: dirApp,
        exclude: dirNode,
        options: {
          compact: true
        }
      },
      // ESLINT
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
        }
      },
      // STYLES
      {
        test: /\.css$/,
        include: `${dirAssets}/css`,
        exclude: dirNode,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: IS_DEV
            }
          }
        ]
      },
      // CSS / SASS
      {
        test: /\.scss/,
        include: dirAssets,
        exclude: dirNode,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: IS_DEV
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: IS_DEV
            }
          }
        ]
      },
      // IMAGES
      {
        test: /\.(jpe?g|png|gif|ttf)$/,
        loader: 'file-loader',
        include: dirAssets,
        exclude: dirNode,
        options: {
          name: '[path][name].[ext]'
        }
      },
      // RAW
      {
        test: [/\.vert$/, /\.frag$/],
        use: 'raw-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all'
    }
  }
};
