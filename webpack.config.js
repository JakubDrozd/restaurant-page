const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    homePage: "./src/homePage.js",
    menuPage: "./src/menuPage.js",
    contactPage: "./src/contactPage.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant Page",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
