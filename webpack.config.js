const path = require('path')


module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  devServer: {
    historyApiFallback: true
  },

  resolve: {
    modules: ['src', 'node_modules']
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'] 
    }]
  }
}

