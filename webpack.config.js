const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './src/index.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000}),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
    extensions: ['.js','.jsx','.json'],
    modules: [
      path.resolve(__dirname, "src"),
      'node_modules'
    ],
    alias: {
      AppStyles: path.resolve(__dirname, 'src/styles/app.scss'),
      Components: path.resolve(__dirname, 'src/components')
    }
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    },{
      test: /\.scss$/,
      use: [
        {
          loader: 'sass-loader',
          options: {
            includePaths: [
              path.resolve(__dirname, 'node_modules/foundation-sites/scss')
            ]
          }
        }
      ]
    }],
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', { modules: false}]
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'cheap-module-source-map'
  // devtool: 'source-map'
};
