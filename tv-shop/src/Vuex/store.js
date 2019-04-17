import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tvsArr: [],
    // current_page: []
  },
  mutations: {
    [types.TVS_ARR]: (state, payload) => {
      state.tvsArr = payload;
    },
  },
  actions: {
    [types.ACTION_TVS_ARR]({ commit }, payload) {
      commit(types.TVS_ARR, payload);
    },
  }
})
