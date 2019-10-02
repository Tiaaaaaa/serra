const PATH = require("path");
const WEBPACK_HTML_PLUGIN = require("html-webpack-plugin");
const WEBPACK = require("webpack");

module.exports = {
  entry: {
    app: "./src/index.js",
    vendor: ["react", "react-dom"]
  },
  output: {
    path: PATH.resolve(__dirname, "./build/"),
    filename: "build.js",
    chunkFilename: "[id].[hash:8].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: "babel-loader?cacheDirectory"
      }
    ]
  },
  plugins: [
    new WEBPACK_HTML_PLUGIN({
      template: PATH.join(__dirname, "./src/index.html"),
      inject: true,
      filename: "index.html",
      hash: true,
      minify: true
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace("@", "")}`;
          }
        }
      }
    }
  },
  devServer: {
    hot: true,
    inline: true,
    contentBase: PATH.join(__dirname, "src"),
    port: 4000,
    historyApiFallback: true,
    host: "localhost"
  }
};
