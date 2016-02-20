module.exports = {
  entry: ['.src/index.js'],
  module: {
    loader: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    fileName: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};