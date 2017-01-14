var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

const dirBuild = path.resolve('dist')

const optionsDefinePlugin = {
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
}

const optionsUglifyJsPlugin = {
  compress: {
    warnings: false
  }
}

const ExtractTextStyle = new ExtractTextPlugin('style.min.css')

var prodConfig = {
  entry: './src/index.js',
  output: {
    path: dirBuild,
    filename: '[name].min.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['','.js','.jsx']
  },
  module: {
    preLoaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader' }
    ],
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.css$/, loader: ExtractTextStyle.extract('style-loader', 'css-loader') },
      { test: /\.(ttf|otf|eot|svg|woff(2)?)$/, loader: 'url' }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin(optionsDefinePlugin),
    ExtractTextStyle,
    new HtmlWebpackPlugin({template: path.join(__dirname,'index.html')}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(optionsUglifyJsPlugin)
  ]
}

module.exports = prodConfig