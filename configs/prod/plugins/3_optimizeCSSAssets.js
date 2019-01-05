//====================================================|
// WEBPACK PROD PLUGINS: OPTIMIZE CSS ASSETS


//--------------------------| Import

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


//--------------------------| Configuration

const plugin = new OptimizeCssAssetsPlugin({
  assetNameRegExp: /\.css$/g,
  cssProcessor: require('cssnano'),
  cssProcessorOptions: { discardComments: { removeAll: true } },
  canPrint: true
});


//--------------------------| Export

module.exports = plugin;
