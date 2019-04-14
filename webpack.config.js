const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {

    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(gif|png|jpg|svg)$/,
        use: [
          {
            loader: 'url-loader',
            // options: {
            //   limit: 51200,
            //   name: "./assets/[name].[ext]"
            // }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/mystyles.css'),
    new HtmlWebpackPlugin({ template: 'src/index.html' })
  ]
};
