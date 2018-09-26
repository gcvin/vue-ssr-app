module.exports = {
  lintOnSave: false,
  configureWebpack: config => {
    config.entry = './src/entry-client'
    config.target = 'node'
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.optimizeSSR = false
        return options
      })
  }
}
