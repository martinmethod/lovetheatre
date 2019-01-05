//====================================================|
// WEBPACK DEV LOADERS: EXTERNAL CSS


//--------------------------| Export

module.exports = {
  test: /\.s?css$/,
  include: /node_modules/,
  use: [
    {
      loader: 'style-loader' // creates style nodes from JS strings,
    },
    {
      loader: 'css-loader', // translates CSS into CommonJS
      options: {
        modules: false
      }
    }
  ]
};
