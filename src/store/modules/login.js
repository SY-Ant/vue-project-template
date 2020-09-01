/*
 * @description: 
 * @Date: 2020-09-01 16:02:30
 * @LastEditTime: 2020-09-01 17:22:09
 */
const state = {
  userName: 'zhangsan'
}

const mutations = {
  increment(state, params) {
    state.userName = params;
  }
}

export default {
  namespaced: true,
  state,
  mutations
}






