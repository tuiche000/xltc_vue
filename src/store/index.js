import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: 0,
    register: {}
  },
  getters: {
    menu: state => state.menu,
    register: state => state.register,
  },
  actions: {
    async ['SET_MENU']({ commit }, params = {}) {
      commit(['SET_MENU'], params);
    },
  },
  mutations: {
    ['SET_MENU'](state, payload) {
      state.menu = payload
    },
    ['SET_REGISTER'](state, payload) {
      state.register = payload
    },
  }
});
