const path = require("path");
const webpack = require("webpack");

module.exports = {
  resolve: {
    extensions: ['.js'],
    modules: [__dirname, 'node_modules']
  },
  entry: {
    library: [
      'react',
      'react-dom'
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './output'),
    library: '[name]'
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
      name: 'vendor',
      path: path.join(__dirname, 'output', 'vendor-manifest.json')
    }),
  ],
};
