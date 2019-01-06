//====================================================|
// WEBPACK PROD PLUGINS: BANNER


//--------------------------| Import

const webpack = require('webpack');
const { name, title, homepage, author, version } = require('../../../package.json');


//--------------------------| Configuration

const banner =
`
 • ${title || name} (v${version})
   ${homepage}
   Copyright © ${new Date().getFullYear()} ${author.name}
   
 • ${author.name}
   ${author.email}
   ${author.url}
   
 • Last update: ${new Date().toDateString()}
`;

const plugin = new webpack.BannerPlugin({ banner });


//--------------------------| Export

module.exports = plugin;
