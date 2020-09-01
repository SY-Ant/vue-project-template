/*
 * @description: 
 * @Date: 2020-09-01 15:55:03
 * @LastEditTime: 2020-09-01 17:47:46
 */

import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})


const store = new Vuex.Store({
  modules,
  plugins: [createPersistedState({
    storage: window.sessionStorage,
    reducer(val) {
      return {
        list: val.list
      }
    }
  })]
})

export default store;