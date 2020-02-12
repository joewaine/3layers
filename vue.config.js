const path = require('path')
const webpack = require('webpack')

module.exports = {
  baseUrl: process.env.VUE_APP_PATH,
  productionSourceMap: false,
  filenameHashing: (process.env.NODE_ENV !== 'production'),
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/styles/_variables.scss";'
      }
    }
  },
  chainWebpack: config => {
    config.module
    .rule('createjs')
    .test(/node_modules[/\\]latest-createjs/)
    .use('createjs-import-loader')
    .loader('imports-loader?this=>window')
    .end()
    .use('createjs-export-loader')
    .loader('exports-loader?window.createjs')
    .end()

    // config.module
    // .rule('header')
    // .test(/assets\/js\/sdwan_security_header.js/)
    // .use('windowLoadHeader')
    // .loader('imports-loader?this=>window')
    // .end()
    //
    // config.module
    // .rule('animation')
    // .test(/assets\/js\/sdwan_security_animation.js/)
    // .use('windowLoadAnimation')
    // .loader('imports-loader?this=>window')
    // .end()
  }
}
