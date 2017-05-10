var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: __dirname + '/client/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    inline: true,
    historyApiFallback: true,
    port: 3000,
    contentBase: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [ 'css-loader', 'sass-loader' ]
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ 'babel-preset-react', 'babel-preset-es2015', 'babel-preset-stage-2' ]
          }
        }
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: './images/[name].[ext]',
        },
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new CopyWebpackPlugin([ {
      from: 'index.html',
      to: 'index.html'
    } ])
  ]
};
