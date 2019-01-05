//====================================================|
// WEBPACK DEV LOADERS: IMAGES


//--------------------------| Export

module.exports = {
  test: /\.(png|jpg|gif)$/,
  use: [
    {
      loader: 'file-loader'
    }
  ]
};
