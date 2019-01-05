//====================================================|
// WEBPACK CONFIG: DEV


//--------------------------| Import

const glob = require('glob');
const path = require('path');
const loaders = glob.sync(`${__dirname}/loaders/**/*.js`).map(file => require( path.resolve( file ) ));
const plugins = glob.sync(`${__dirname}/plugins/**/*.js`).map(file => require( path.resolve( file ) ));
// const commonLoaders = glob.sync(`${__dirname}/../common/loaders/**/*.js`).map(file => require( path.resolve( file ) ));
const commonPlugins = glob.sync(`${__dirname}/../common/plugins/**/*.js`).map(file => require( path.resolve( file ) ));
const { ports } = require('../../package.json');


//--------------------------| Configuration

const config = {
  mode: 'development',
  entry: [
    `webpack-dev-server/client?http://localhost:${ports.dev}`,
    `webpack/hot/only-dev-server`,
    `./client/src/index.js`
  ],
  module: {
    rules: [...loaders]
  },
  plugins: [...plugins, ...commonPlugins],
  devtool: 'inline-source-map'
};


//--------------------------| Export

module.exports = config;
