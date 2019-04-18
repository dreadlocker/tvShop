import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tvsArr: [],
    checkedTvNames: [],
  },
  mutations: {
    [types.TVS_ARR]: (state, payload) => {
      state.tvsArr = payload;
    },
    [types.CHECKED_TV_NAMES]: (state, payload) => {
      state.checkedTvNames = payload;
    },
  },
  actions: {
    [types.ACTION_TVS_ARR]({ commit }, payload) {
      commit(types.TVS_ARR, payload);
    },
    [types.ACTION_CHECKED_TV_NAMES]({ commit }, payload) {
      commit(types.CHECKED_TV_NAMES, payload);
    },
  }
})
