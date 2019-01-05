//====================================================|
// POSTCSS CONFIGURATION


//--------------------------| Define plugins

const plugins = [
  // generates all of your @font-face rules (THIS HAS TO BE SET BEFORE CSSNANO DUE TO A BUG)
  require('postcss-font-magician')({
    formats: [
      'woff2',
      'woff'
    ],
    protocol: 'https:' // set if Google Fonts only used
  }),

  // convert pixel units to rem (root em) units
  require('postcss-pxtorem')({
    rootValue: 10,
    unitPrecision: 2,
    selectorBlackList: ['html']
  }),

  // create smooth linear-gradients that approximate easing functions
  require('postcss-easing-gradients'),

  // this project tries to fix all of flexbug's issues
  // https://github.com/philipwalton/flexbugs
  require('postcss-flexbugs-fixes'),

  // convert modern CSS into something most browsers can understand
  require('postcss-preset-env'),

  // most commonly used mixins, shortcuts and helpers
  require('postcss-utilities'),

  // transform @import rules by inlining content
  require('postcss-import'),

  // pack same CSS media query rules into one
  require('css-mqpacker'),

  // discard comments in your CSS files with PostCSS
  require('postcss-discard-comments')({
    removeAll: true
  })
];


//--------------------------| Define config

const config = {
  syntax: 'postcss-scss',

  plugins
};


//--------------------------| Export

module.exports = config;
