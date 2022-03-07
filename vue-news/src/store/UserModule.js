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
    GET_USER_INFO({ commit }, userName) {
      fetchUserInfo(userName)
        .then(({ data }) => {
          commit('SET_USER_INFO', data);
        })
        .catch(error => console.log(error));
    },
  },
};
