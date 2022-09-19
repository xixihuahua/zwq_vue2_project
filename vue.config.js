const {defineConfig} = require('@vue/cli-service');
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
    productionSourceMap:false,
    transpileDependencies: true,
    // 关闭ESLINT校验工具
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                // target: "http://39.98.123.211",
                target: "http://gmall-h5-api.atguigu.cn",
            }
        }
    },
    configureWebpack: {
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
    }
})
