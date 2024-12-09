const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'dist', // 确保这是你希望 Electron 加载静态文件的位置
  publicPath: process.env.NODE_ENV === 'production'
    ? './' // 对于 Electron 应用，通常我们使用相对路径
    : '/',
})
