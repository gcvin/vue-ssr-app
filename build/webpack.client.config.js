/*
* @Author: admin
* @Date:   2018-09-20 16:20:12
* @Last Modified by:   zhanglin
* @Last Modified time: 2018-09-25 14:59:45
*/
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('@vue/cli-service/webpack.config.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(baseConfig, {
  entry: './src/entry-client',
  output: {
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.SplitChunksPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new VueSSRClientPlugin()
  ]
})
