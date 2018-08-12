var path = require("path");

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "App.js"
  },
  module: {
    loaders: [
      {
        loaders: "babel-loader",
        query: {
          presets: ["es2015"]
        },
        test: /\.js$/,
        exclude:  /nodemodules/
      }
    ]
  }
};