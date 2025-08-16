const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/welcome/' : '/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/styles/index.scss";
        `,
      },
    },
  },
})
