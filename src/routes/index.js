/*
 * @description: 
 * @Date: 2020-08-30 22:40:42
 * @LastEditTime: 2020-08-31 00:14:04
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = [
  {
    path: '/',
    redirect: '/login',
    component: () => import(`@/views/login`)
  },
  {
    path: '/login',
    component: () => import(`@/views/login`)
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default createRouter()