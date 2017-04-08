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
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
  ] : [],
  watch: PROD ? false : true
  
};