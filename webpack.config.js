const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      // JSX Loader
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      // TS Loader
      {
        test: /\.ts(x?)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      // CSS Loader
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // SVG Loader
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 8485,
    publicPath: "http://localhost:8485/dist/",
    hotOnly: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
