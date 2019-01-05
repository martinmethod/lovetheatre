//====================================================|
// WEBPACK DEV PLUGINS: STYLELINT


//--------------------------| Import

const StyleLintPlugin = require('stylelint-webpack-plugin');


//--------------------------| Configuration

const plugin = new StyleLintPlugin({
  files: ['./client/src/app/**/*.scss'],
  syntax: 'scss',
  configFile: '.stylelintrc'
});


//--------------------------| Export

module.exports = plugin;
