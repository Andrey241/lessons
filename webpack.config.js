'use strict';

let path = require('path');

module.exports = {
  mode: 'development', //режим development - код будет работать быстрее , production - работает чуть медленее, для конечной сборки продукта
  entry: './js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
