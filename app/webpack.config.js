const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src", "index.js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "output")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: path.join(__dirname, '..', 'vendor', 'output', 'vendor-manifest.json'),
      name: 'vendor',
    }),
  ],
};
