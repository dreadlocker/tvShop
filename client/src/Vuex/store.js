import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tvsArr: [],
    checkedTvNames: [],
    tvCountPerPage: 10,
    tvsBrand: [],
    tvsSortBy: [],
  },
  mutations: {
    [types.TVS_ARR]: (state, payload) => {
      state.tvsArr = payload;
    },
    [types.CHECKED_TV_NAMES]: (state, payload) => {
      state.checkedTvNames = payload;
    },
    [types.TV_COUNT_PER_PAGE]: (state, payload) => {
      state.tvCountPerPage = payload;
    },
    [types.TVS_BRAND]: (state, payload) => {
      state.tvsBrand = payload;
    },
    [types.TVS_SORT_BY]: (state, payload) => {
      state.tvsSortBy = payload;
    },
  },
  actions: {
    [types.ACTION_TVS_ARR]({ commit }, payload) {
      commit(types.TVS_ARR, payload);
    },
    [types.ACTION_CHECKED_TV_NAMES]({ commit }, payload) {
      commit(types.CHECKED_TV_NAMES, payload);
    },
    [types.ACTION_TV_COUNT_PER_PAGE]({ commit }, payload) {
      commit(types.TV_COUNT_PER_PAGE, payload);
    },
    [types.ACTION_TVS_BRAND]({ commit }, payload) {
      commit(types.TVS_BRAND, payload);
    },
    [types.ACTION_TVS_SORT_BY]({ commit }, payload) {
      commit(types.TVS_SORT_BY, payload);
    },
  }
})
