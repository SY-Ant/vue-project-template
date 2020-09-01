/*
 * @description:
 * @Date: 2020-08-25 18:27:35
 * @LastEditTime: 2020-09-01 16:15:00
 */
import Vue from 'vue';
import App from '@/App.vue';
import ElementUI from 'element-ui';
import router from '@/routes';
import 'reset-css';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store';

import MyPlugin from '@/utils/install';

Vue.use(ElementUI);
Vue.use(MyPlugin);


Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
