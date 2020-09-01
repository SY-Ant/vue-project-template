/*
 * @description: 
 * @Date: 2020-09-01 10:33:33
 * @LastEditTime: 2020-09-01 10:45:14
 */


import Server from '@/api/server';
export default {
  install(Vue) {
    Vue.prototype.$server = Server;
  }
}