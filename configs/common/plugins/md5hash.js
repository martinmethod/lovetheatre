//====================================================|
// WEBPACK COMMON PLUGINS: MD5 HASH


//--------------------------| Import

const WebpackMd5Hash = require('webpack-md5-hash');


//--------------------------| Configuration

const plugin = new WebpackMd5Hash();


//--------------------------| Export

module.exports = plugin;
