/*
* @Author: admin
* @Date:   2018-09-20 16:35:27
* @Last Modified by:   zhanglin
* @Last Modified time: 2018-09-25 14:59:52
*/
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('@vue/cli-service/webpack.config.js')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(baseConfig, {
  entry: './src/entry-server',
  target: 'node',
  devtool: 'source-map',
  output: {
    publicPath: '/dist/',
    libraryTarget: 'commonjs2'
  },
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  plugins: [
    new VueSSRServerPlugin()
  ]
})
