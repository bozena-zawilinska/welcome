const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/portfolio-2025/' : '/',
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
