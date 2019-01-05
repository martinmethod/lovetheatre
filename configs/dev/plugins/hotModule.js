//====================================================|
// WEBPACK DEV PLUGINS: HOT MODULE


//--------------------------| Import

const webpack = require('webpack');


//--------------------------| Configuration

const plugin = new webpack.HotModuleReplacementPlugin();


//--------------------------| Export

module.exports = plugin;
