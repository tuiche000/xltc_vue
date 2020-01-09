import { SET_TOKEN, SET_LANG, HIDE_LOADING, SHOW_LOADING, SET_USERINFO } from '../types'

export default {
  state: {
    loading: false,
    token: '',
    lang: '',
    userinfo: {}
  },
  getters: {
    loading: state => state.loading,
    token: state => state.token,
    lang: state => state.lang,
    userinfo: state => state.userinfo,
  },
  actions: {
    async [SET_TOKEN]({ commit }, params = {}) {
      commit(SET_TOKEN, params);
    },
    async [SET_LANG]({ commit }, params = {}) {
      commit(SET_LANG, params);
    },
  },
  mutations: {
    [SHOW_LOADING](state) {
      state.loading = true;
    },
    [HIDE_LOADING](state) {
      state.loading = false;
    },
    [SET_TOKEN](state, payload = {
      token: ''
    }) {
      state.token = payload.token
    },
    [SET_LANG](state, payload = {}) {
      state.lang = payload.lang
    },
    [SET_USERINFO](state, payload = {}) {
      state.userinfo = payload
    },
  }
};
