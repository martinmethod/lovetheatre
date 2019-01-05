//====================================================|
// WEBPACK PROD LOADERS: IMAGES


//--------------------------| Export

module.exports = {
  test: /\.(png|jpg|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'images/[name].[ext]'
      }
    }
  ]
};
