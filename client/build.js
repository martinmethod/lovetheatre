//====================================================|
// PRODUCTION BUILD SCRIPT


//--------------------------| Import

const webpack = require('webpack');
const webpackConfig = require('../configs/prod/webpack.config.prod');
const chalk = require('chalk');


//--------------------------| Build

webpack(webpackConfig).run(function(err, stats) {
  console.log(chalk.green('Compiled successfully!'));
});
