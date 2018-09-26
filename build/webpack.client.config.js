/*
* @Author: admin
* @Date:   2018-09-20 16:20:12
* @Last Modified by:   zhanglin
* @Last Modified time: 2018-09-26 10:18:35
*/
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const baseConfig = require('@vue/cli-service/webpack.config.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

const isprod = process.env.NODE_ENV === 'production'

const config = merge(baseConfig, {
  entry: {
    main: './src/entry-client'
  },
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

if (isprod) {
  const clean = new CleanWebpackPlugin('dist', path.resolve(__dirname, '..'))
  config.plugins.push(clean)
}

module.exports = config
