//====================================================|
// WEBPACK PROD PLUGINS: MINI CSS EXTRACT


//--------------------------| Import

const MiniCssExtractPlugin = require("mini-css-extract-plugin");


//--------------------------| Configuration

const plugin = new MiniCssExtractPlugin({
  filename: "app.[contenthash].css"
});


//--------------------------| Export

module.exports = plugin;
