module.exports = {
  entry: ['.src/index.js'],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    fileName: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};