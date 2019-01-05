//====================================================|
// WEBPACK DEV LOADERS: SCRIPTS


//--------------------------| Export

module.exports = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        plugins: ['react-hot-loader/babel']
      }
    },
    {
      loader: 'eslint-loader'
    }
  ]
};
