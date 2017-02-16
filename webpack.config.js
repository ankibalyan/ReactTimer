const path = require('path');

module.exports = {
  entry: ['./src/index.jsx'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
    extensions: ['.js','.jsx','.json'],
    modules: [
      path.resolve(__dirname, "src"),
      'node_modules'
    ]
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  }
};
