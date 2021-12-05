const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
console.log('__dirname', __dirname)
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'main.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Title', template: './src/index.html' }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },{
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"]
    },{
      test: /\.(png|svg|jpg|gif)$/,
      type: 'asset/resource'
    }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    // contentBase: path.join(__dirname, '/dist/'),
    // host: 'localhost',
    port: 5000,
  }
};