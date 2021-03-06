var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

module.exports = {
  entry: __dirname + '/src/js/index.js',
  output: {
    path: __dirname + '/dist/js',
    filename: 'index.min.js',
  },
  devServer: {
    inline: true,
    contentBase: './dist',
  },
  devtool: debug ? 'inline-sourcemap' : null,
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
      },
    }]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
