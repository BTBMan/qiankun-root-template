const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { resolve } = require('path');

module.exports = {
  mode: 'development',
  entry: {
    root: './src/root.js',
  },
  output: {
    path: resolve(__dirname, './dist'),
    publicPath: '/',
  },
  devServer: {
    port: 9100,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      templateParameters: {},
      favicon: false,
    }),
    new CleanWebpackPlugin(),
  ],
};
