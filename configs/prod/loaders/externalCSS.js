//====================================================|
// WEBPACK PROD LOADERS: EXTERNAL CSS


//--------------------------| Import

const MiniCssExtractPlugin = require("mini-css-extract-plugin");


//--------------------------| Export

module.exports = {
  test: /\.s?css$/,
  include: /node_modules/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader', // translates CSS into CommonJS
      options: {
        modules: false
      }
    }
  ]
};
