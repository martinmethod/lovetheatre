//====================================================|
// WEBPACK COMMON LOADERS: FONTS


//--------------------------| Export

module.exports = {
  test: /\.(woff|woff2)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'fonts/[hash].[ext]'
      }
    }
  ]
};
