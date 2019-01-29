//====================================================|
// WEBPACK PROD PLUGINS: MINIFY


//--------------------------| Import

const MinifyPlugin = require('babel-minify-webpack-plugin');


//--------------------------| Configuration

const plugin = new MinifyPlugin({}, {
  comments: false
});


//--------------------------| Export

module.exports = plugin;
