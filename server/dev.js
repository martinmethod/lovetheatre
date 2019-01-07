//====================================================|
// DEVELOPMENT SERVER


//--------------------------| Import

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const opn = require('opn');
const chalk = require('chalk');
const webpackConfig = require('../configs/dev/webpack.config.dev');
const pkg = require('../package.json');


//--------------------------| Define

const port = pkg.ports.dev;
const browser = process.platform === 'win32' ? 'Chrome' : '/Applications/Google Chrome.app';


//--------------------------| Config

const server = new WebpackDevServer(Webpack(webpackConfig), {
  hot: true,
  // Handle routing via client side code
  historyApiFallback: true,
  // It suppress error shown in console, so it has to be set to false.
  quiet: false,
  // It suppress everything except error, so it has to be set to false as well to see success build.
  noInfo: false,
  disableHostCheck: true,
  stats: {
    assets: false,
    version: false,
    children: false,
    modules: false,
    chunks: false,
    chunkModules: false,
    colors: true
  }
});


//--------------------------| Initialize

server.listen(port, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log(chalk.green(`Listening at localhost:${port}`));

  opn(`http://localhost:${port}`, {
    app: browser
  });
});
