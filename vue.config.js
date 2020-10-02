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
    }
  }