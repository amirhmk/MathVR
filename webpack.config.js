const webpack = require("webpack");
const path = require("path");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "bundle.js",
  },

  devServer: {
    contentBase: path.join(__dirname, "docs"),
    compress: true,
    hot: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: ["aframe-super-hot-loader"],
      },
      {
        test: /\.html/,
        exclude: /(node_modules)/,
        use: ["aframe-super-hot-html-loader"],
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.glsl/,
        exclude: /(node_modules)/,
        loader: "webpack-glsl-loader",
      },
    ],
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/),
  ],
};

module.exports = config;
