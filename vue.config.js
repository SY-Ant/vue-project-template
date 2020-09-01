/*
 * @description:
 * @Date: 2020-08-25 18:58:18
 * @LastEditTime: 2020-09-01 11:56:44
 */
const path = require('path');
module.exports = {
  lintOnSave: false,
  // lintOnSave: process.env.NODE_ENV !== 'production' ? 'error' : false,
  // devServer: {
  //   overlay: {
  //     warnings: true,
  //     errors: true
  //   }
  // },
  devServer: {
    proxy: {
      '/list': {
        target: 'http://192.168.199.180:3000',//代理地址，这里设置的地址会代替axios中设置的baseURL
        ws: true,
        secure: false, // 使用的是http协议则设置为false，https协议则设置为true
        changOrigin: true, //开启代理
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('assets', path.join(__dirname, 'src/assets')).set('components', path.join(__dirname, 'src/components'))
  },
  css: {
    loaderOptions: {
      less: {
        prependData: `@import "~assets/css/variables.less";`
      }
    }
  }
}
