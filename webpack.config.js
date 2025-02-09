const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // loaders
  module: {
    rules: [
      {
        test: /\.css$/i, use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource',
      },
    ],
  },
  // plugins
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        title: 'Restaurant',
        inject: 'head',
        scriptLoading: 'defer',
    }),
  ],
};