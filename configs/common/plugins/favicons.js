//====================================================|
// WEBPACK COMMON PLUGINS: FAVICONS


//--------------------------| Import

const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { title } = require(`../../../package.json`);


//--------------------------| Configuration

const plugin = new FaviconsWebpackPlugin({
  // Your source logo
  logo: './client/src/assets/images/logo.png',
  // The prefix for all image files (might be a folder or a name)
  prefix: 'icons-[hash]/',
  // Emit all stats of the generated icons
  emitStats: false,
  // The name of the json containing all favicon information
  statsFilename: 'iconstats-[hash].json',
  // Generate a cache file with control hashes and
  // don't rebuild the favicons until those hashes change
  persistentCache: false,
  // Inject the html into the html-webpack-plugin
  inject: true,
  // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
  background: '#fff',
  // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
  title,
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: false,
    coast: false,
    favicons: true,
    firefox: true,
    opengraph: true,
    twitter: true,
    yandex: false,
    windows: false
  }
});


//--------------------------| Export

module.exports = plugin;
