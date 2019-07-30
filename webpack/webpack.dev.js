const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin= require('copy-webpack-plugin');

const {
  prod_Path,
  src_Path,
  app_Path
} = require('./path');
const { selectedPreprocessor }  = require('./loader');
module.exports = {
  entry: {
    main: './' + src_Path + '/index.ts'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
     app: app_Path 
    },
  },
  output: {
    path: path.resolve(__dirname, prod_Path),
    filename: '[name].[chunkhash].js'
  },
  devtool: 'source-map',
  devServer: {
    open: false,
    proxy: {
      '/graphql': {
        target: 'https://dev.clusters.cyber.bet',
        secure: false,
        changeOrigin: true
      }
    },
  },
  module: {
    rules: [{
      test: /\.ts?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: selectedPreprocessor.fileRegexp,
      use: [{
          loader: MiniCssExtractPlugin.loader
        },
        {
          loader: 'css-loader',
          options: {
            modules: false,
            sourceMap: true
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: selectedPreprocessor.loaderName,
          options: {
            sourceMap: true
          }
        },
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './' + src_Path + '/index.html',
      filename: 'index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: './src/public',
        to: './public'
      },
      {
        from: './src/config.js',
        to: './'
      }
    ])
  ]
};