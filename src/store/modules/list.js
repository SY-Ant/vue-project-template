/*
 * @description: 
 * @Date: 2020-09-01 16:02:30
 * @LastEditTime: 2020-09-01 17:04:48
 */
const state = {
  listArr: []
}

const mutations = {
  addList(state, params) {
    state.listArr = params;
  }
}

export default {
  namespaced: true,
  state,
  mutations
}






