/**
* @Author: BreezeDust
* @Date:   2016-03-13
* @Email:  breezedust.com@gmail.com
* @Last modified by:   BreezeDust
* @Last modified time: 2016-04-10
*/



module.exports = {
  entry: "./app/main.js",
  output: {
    path: "./build",
    publicPath: "/build/",
    filename: "build.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.html$/, loader: "html" },
      { test: /\.vue$/, loader: "vue" }
    ]
  },
  devtool: 'source-map'
};