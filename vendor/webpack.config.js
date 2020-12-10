const path = require("path");
const webpack = require("webpack");

console.log(__dirname);

module.exports = {
  resolve: {
    extensions: ['.js'],
    modules: [__dirname, 'node_modules']
  },
  entry: {
    vendor: [
      'react',
      'react-dom'
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './output'),
    library: 'vendor'
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
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: 'vendor',
      path: path.join(__dirname, 'output', 'vendor-manifest.json')
    }),
  ],
};
