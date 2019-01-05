//====================================================|
// WEBPACK PROD PLUGINS: CLEAN


//--------------------------| Import

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');


//--------------------------| Configuration

const plugin = new CleanWebpackPlugin([
  'client/dist',
  'production.zip'
], {
  root:     path.join(__dirname, '../../../'),
  verbose:  true,
  dry:      false
});


//--------------------------| Export

module.exports = plugin;
