import { fetchUserInfo } from '@/api';

export default {
  namespaced: true,

  state() {
    return {
      userInfo: {},
    };
  },

  mutations: {
    SET_USER_INFO(state, payload) {
      state.userInfo = payload;
    },
  },

  actions: {
    async GET_USER_INFO({ commit }, userId) {
      const response = await fetchUserInfo(userId);
      commit('SET_USER_INFO', response.data);
    },
  },
};
