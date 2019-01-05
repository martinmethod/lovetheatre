//====================================================|
// WEBPACK DEV LOADERS: INTERNAL CSS


//--------------------------| Import

const resources = require('../../common/staff/cssResources');


//--------------------------| Export

module.exports = {
  test: /\.s?css$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'style-loader', // compiles Sass to CSS (required due to Hot Module Replacement)
      options: {
        sourceMap: true
      }
    },
    {
      loader: 'css-loader', // translates CSS into CommonJS
      options: {
        modules: true,
        sourceMap: true,
        camelCase: 'dashes',
        localIdentName: '[name]__[local]__[hash:base64:5]'
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: './postcss.config.js'
        },
        sourceMap: true
      }
    },
    {
      loader: 'sass-loader', // compiles Sass to CSS
      options: {
        sourceMap: true
      }
    },
    {
      loader: 'sass-resources-loader',
      options: {
        resources
      },
    }
  ]
};
