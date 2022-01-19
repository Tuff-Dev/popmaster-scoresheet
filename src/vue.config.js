module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/variables.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/popmaster-scoresheet/' : '/'
}