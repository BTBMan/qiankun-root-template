const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { resolve, join } = require('path');

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
    static: {
      directory: join(__dirname, 'dist'),
    },
    port: 9100,
    hot: 'only',
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
