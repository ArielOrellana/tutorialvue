const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/tutorialvue/',
  outputDir:'dist',
  assetsDir:'static'
})
