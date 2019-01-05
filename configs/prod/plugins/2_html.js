//====================================================|
// WEBPACK PROD PLUGINS: HTML


//--------------------------| Import

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { title, homepage, description} = require('../../../package.json');


//--------------------------| Configuration

const plugin = new HtmlWebpackPlugin({
  title,
  homepage,
  description,
  cover: `${homepage}/images/logo.png`,
  template: './client/src/markup/index.html',
  minify: {
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
    collapseWhitespace: true,
    preserveLineBreaks: false
  }
});


//--------------------------| Export

module.exports = plugin;
