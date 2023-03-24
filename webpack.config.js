const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/assets/img/*",
          to: "assets/img/[name][ext]",
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new CspHtmlWebpackPlugin({
      'default-src': "'self'",
      'script-src': ["'self'", "https://martin-binard.com/main.bundle.js"],
      'style-src': ["'self'", "'unsafe-inline'"],
      'font-src': ["https://fonts.googleapis.com", "https://fonts.gstatic.com"],
      'style-src-elem': ["'self'", "https://fonts.googleapis.com", "'unsafe-inline'"],
      }),
  ],
  stats: "minimal",
  mode: "production",
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    open: true,
    port: 4000,
  },
};
