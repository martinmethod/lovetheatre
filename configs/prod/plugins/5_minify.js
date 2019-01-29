//====================================================|
// WEBPACK PROD PLUGINS: MINIFY


//--------------------------| Import

const MinifyPlugin = require('babel-minify-webpack-plugin');


//--------------------------| Configuration

const plugin = new MinifyPlugin();


//--------------------------| Export

module.exports = plugin;
