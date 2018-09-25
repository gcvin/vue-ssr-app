module.exports = {
  lintOnSave: false,
  configureWebpack: config => {
    config.entry = './src/entry-client'
  }
}
