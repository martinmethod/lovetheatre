//====================================================|
// WEBPACK PROD PLUGINS: SERVICE WORKER


//--------------------------| Import

const WorkboxPlugin = require('workbox-webpack-plugin');


//--------------------------| Configuration

const plugin = new WorkboxPlugin.GenerateSW();


//--------------------------| Export

module.exports = plugin;
