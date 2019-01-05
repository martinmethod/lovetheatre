//====================================================|
// WEBPACK DEV LOADERS: FONTS


//--------------------------| Export

module.exports = {
  test: /\.(woff|woff2)$/,
  use: [
    {
      loader: 'file-loader?name=/fonts/[hash].[ext]'
    }
  ]
};
