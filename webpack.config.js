const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CspHtmlWebpackPlugin = require("csp-html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].bundle.js",
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
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), "..."],
  },
  plugins: [
    new MiniCssExtractPlugin(),
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
      "script-src": "'self'",
      "style-src": "'self'",
      "font-src": ["https://fonts.googleapis.com", "https://fonts.gstatic.com"],
      "style-src-elem": [
        "'self'",
        "https://fonts.googleapis.com",
        "'unsafe-inline'",
      ],
      "form-action": "'self'",
      "img-src": ["'self'", "http://www.w3.org/2000/svg"],
    }),
    new Dotenv({
      path: './.env',
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
