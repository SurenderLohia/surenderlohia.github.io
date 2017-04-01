var webpack = require('webpack');
var path = require('path');

//PROD_ENV=1 for production build
var PROD = JSON.parse(process.env.PROD_ENV || '0'); 


module.exports = {
  entry: path.resolve(__dirname, 'assets/js/main.js'),
  devtool: PROD ? 'eval' : 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets/js')
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),

    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ] : [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
};